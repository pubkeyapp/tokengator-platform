import {
  UserCreateProjectMemberInput,
  UserFindManyProjectMemberInput,
  UserUpdateProjectMemberInput,
  ProjectMember,
} from '@tokengator/sdk'
import { getAliceCookie, getBobCookie, sdk, uniqueId } from '../support'

describe('api-project-member-feature', () => {
  describe('api-project-member-user-resolver', () => {
    const projectMemberName = uniqueId('acme-project-member')
    let projectMemberId: string
    let cookie: string

    beforeAll(async () => {
      cookie = await getAliceCookie()
      const created = await sdk.userCreateProjectMember({ input: { name: projectMemberName } }, { cookie })
      projectMemberId = created.data.created.id
    })

    describe('authorized', () => {
      beforeAll(async () => {
        cookie = await getAliceCookie()
      })

      it('should create a project-member', async () => {
        const input: UserCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }

        const res = await sdk.userCreateProjectMember({ input }, { cookie })

        const item: ProjectMember = res.data.created
        expect(item.name).toBe(input.name)
        expect(item.id).toBeDefined()
        expect(item.createdAt).toBeDefined()
        expect(item.updatedAt).toBeDefined()
      })

      it('should update a project-member', async () => {
        const createInput: UserCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.userCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id
        const input: UserUpdateProjectMemberInput = {
          name: uniqueId('project-member'),
        }

        const res = await sdk.userUpdateProjectMember({ projectMemberId, input }, { cookie })

        const item: ProjectMember = res.data.updated
        expect(item.name).toBe(input.name)
      })

      it('should find a list of projectMembers (find all)', async () => {
        const createInput: UserCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.userCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id

        const input: UserFindManyProjectMemberInput = {}

        const res = await sdk.userFindManyProjectMember({ input }, { cookie })

        expect(res.data.paging.meta.totalCount).toBeGreaterThan(1)
        expect(res.data.paging.data.length).toBeGreaterThan(1)
        // First item should be the one we created above
        expect(res.data.paging.data[0].id).toBe(projectMemberId)
      })

      it('should find a list of projectMembers (find new one)', async () => {
        const createInput: UserCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.userCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id

        const input: UserFindManyProjectMemberInput = {
          search: projectMemberId,
        }

        const res = await sdk.userFindManyProjectMember({ input }, { cookie })

        expect(res.data.paging.meta.totalCount).toBe(1)
        expect(res.data.paging.data.length).toBe(1)
        expect(res.data.paging.data[0].id).toBe(projectMemberId)
      })

      it('should find a project-member by id', async () => {
        const createInput: UserCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.userCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id

        const res = await sdk.userFindOneProjectMember({ projectMemberId }, { cookie })

        expect(res.data.item.id).toBe(projectMemberId)
      })

      it('should delete a project-member', async () => {
        const createInput: UserCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.userCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id

        const res = await sdk.userDeleteProjectMember({ projectMemberId }, { cookie })

        expect(res.data.deleted).toBe(true)

        const findRes = await sdk.userFindManyProjectMember({ input: { search: projectMemberId } }, { cookie })
        expect(findRes.data.paging.meta.totalCount).toBe(0)
        expect(findRes.data.paging.data.length).toBe(0)
      })
    })

    describe('unauthorized', () => {
      let cookie: string
      beforeAll(async () => {
        cookie = await getBobCookie()
      })

      it('should not create a project-member', async () => {
        expect.assertions(1)
        const input: UserCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }

        try {
          await sdk.userCreateProjectMember({ input }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })

      it('should not update a project-member', async () => {
        expect.assertions(1)
        try {
          await sdk.userUpdateProjectMember({ projectMemberId, input: {} }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })

      it('should not find a list of projectMembers (find all)', async () => {
        expect.assertions(1)
        try {
          await sdk.userFindManyProjectMember({ input: {} }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })

      it('should not find a project-member by id', async () => {
        expect.assertions(1)
        try {
          await sdk.userFindOneProjectMember({ projectMemberId }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })

      it('should not delete a project-member', async () => {
        expect.assertions(1)
        try {
          await sdk.userDeleteProjectMember({ projectMemberId }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })
    })
  })
})
