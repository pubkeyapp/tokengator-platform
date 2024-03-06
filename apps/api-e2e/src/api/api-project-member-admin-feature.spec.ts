import {
  AdminCreateProjectMemberInput,
  AdminFindManyProjectMemberInput,
  AdminUpdateProjectMemberInput,
  ProjectMember,
} from '@tokengator/sdk'
import { getAliceCookie, getBobCookie, sdk, uniqueId } from '../support'

describe('api-project-member-feature', () => {
  describe('api-project-member-admin-resolver', () => {
    const projectMemberName = uniqueId('acme-project-member')
    let projectMemberId: string
    let cookie: string

    beforeAll(async () => {
      cookie = await getAliceCookie()
      const created = await sdk.adminCreateProjectMember({ input: { name: projectMemberName } }, { cookie })
      projectMemberId = created.data.created.id
    })

    describe('authorized', () => {
      beforeAll(async () => {
        cookie = await getAliceCookie()
      })

      it('should create a project-member', async () => {
        const input: AdminCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }

        const res = await sdk.adminCreateProjectMember({ input }, { cookie })

        const item: ProjectMember = res.data.created
        expect(item.name).toBe(input.name)
        expect(item.id).toBeDefined()
        expect(item.createdAt).toBeDefined()
        expect(item.updatedAt).toBeDefined()
      })

      it('should update a project-member', async () => {
        const createInput: AdminCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.adminCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id
        const input: AdminUpdateProjectMemberInput = {
          name: uniqueId('project-member'),
        }

        const res = await sdk.adminUpdateProjectMember({ projectMemberId, input }, { cookie })

        const item: ProjectMember = res.data.updated
        expect(item.name).toBe(input.name)
      })

      it('should find a list of projectMembers (find all)', async () => {
        const createInput: AdminCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.adminCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id

        const input: AdminFindManyProjectMemberInput = {}

        const res = await sdk.adminFindManyProjectMember({ input }, { cookie })

        expect(res.data.paging.meta.totalCount).toBeGreaterThan(1)
        expect(res.data.paging.data.length).toBeGreaterThan(1)
        // First item should be the one we created above
        expect(res.data.paging.data[0].id).toBe(projectMemberId)
      })

      it('should find a list of projectMembers (find new one)', async () => {
        const createInput: AdminCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.adminCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id

        const input: AdminFindManyProjectMemberInput = {
          search: projectMemberId,
        }

        const res = await sdk.adminFindManyProjectMember({ input }, { cookie })

        expect(res.data.paging.meta.totalCount).toBe(1)
        expect(res.data.paging.data.length).toBe(1)
        expect(res.data.paging.data[0].id).toBe(projectMemberId)
      })

      it('should find a project-member by id', async () => {
        const createInput: AdminCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.adminCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id

        const res = await sdk.adminFindOneProjectMember({ projectMemberId }, { cookie })

        expect(res.data.item.id).toBe(projectMemberId)
      })

      it('should delete a project-member', async () => {
        const createInput: AdminCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }
        const createdRes = await sdk.adminCreateProjectMember({ input: createInput }, { cookie })
        const projectMemberId = createdRes.data.created.id

        const res = await sdk.adminDeleteProjectMember({ projectMemberId }, { cookie })

        expect(res.data.deleted).toBe(true)

        const findRes = await sdk.adminFindManyProjectMember({ input: { search: projectMemberId } }, { cookie })
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
        const input: AdminCreateProjectMemberInput = {
          name: uniqueId('project-member'),
        }

        try {
          await sdk.adminCreateProjectMember({ input }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })

      it('should not update a project-member', async () => {
        expect.assertions(1)
        try {
          await sdk.adminUpdateProjectMember({ projectMemberId, input: {} }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })

      it('should not find a list of projectMembers (find all)', async () => {
        expect.assertions(1)
        try {
          await sdk.adminFindManyProjectMember({ input: {} }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })

      it('should not find a project-member by id', async () => {
        expect.assertions(1)
        try {
          await sdk.adminFindOneProjectMember({ projectMemberId }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })

      it('should not delete a project-member', async () => {
        expect.assertions(1)
        try {
          await sdk.adminDeleteProjectMember({ projectMemberId }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })
    })
  })
})
