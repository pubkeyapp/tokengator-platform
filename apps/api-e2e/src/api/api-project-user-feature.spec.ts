import { UserCreateProjectInput, UserFindManyProjectInput, UserUpdateProjectInput, Project } from '@tokengator/sdk'
import { getAliceCookie, getBobCookie, sdk, uniqueId } from '../support'

describe('api-project-feature', () => {
  describe('api-project-user-resolver', () => {
    const projectName = uniqueId('acme-project')
    let projectId: string
    let cookie: string

    beforeAll(async () => {
      cookie = await getAliceCookie()
      const created = await sdk.userCreateProject({ input: { name: projectName } }, { cookie })
      projectId = created.data.created.id
    })

    describe('authorized', () => {
      beforeAll(async () => {
        cookie = await getAliceCookie()
      })

      it('should create a project', async () => {
        const input: UserCreateProjectInput = {
          name: uniqueId('project'),
        }

        const res = await sdk.userCreateProject({ input }, { cookie })

        const item: Project = res.data.created
        expect(item.name).toBe(input.name)
        expect(item.id).toBeDefined()
        expect(item.createdAt).toBeDefined()
        expect(item.updatedAt).toBeDefined()
      })

      it('should update a project', async () => {
        const createInput: UserCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.userCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id
        const input: UserUpdateProjectInput = {
          name: uniqueId('project'),
        }

        const res = await sdk.userUpdateProject({ projectId, input }, { cookie })

        const item: Project = res.data.updated
        expect(item.name).toBe(input.name)
      })

      it('should find a list of projects (find all)', async () => {
        const createInput: UserCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.userCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id

        const input: UserFindManyProjectInput = {}

        const res = await sdk.userFindManyProject({ input }, { cookie })

        expect(res.data.paging.meta.totalCount).toBeGreaterThan(1)
        expect(res.data.paging.data.length).toBeGreaterThan(1)
        // First item should be the one we created above
        expect(res.data.paging.data[0].id).toBe(projectId)
      })

      it('should find a list of projects (find new one)', async () => {
        const createInput: UserCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.userCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id

        const input: UserFindManyProjectInput = {
          search: projectId,
        }

        const res = await sdk.userFindManyProject({ input }, { cookie })

        expect(res.data.paging.meta.totalCount).toBe(1)
        expect(res.data.paging.data.length).toBe(1)
        expect(res.data.paging.data[0].id).toBe(projectId)
      })

      it('should find a project by id', async () => {
        const createInput: UserCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.userCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id

        const res = await sdk.userFindOneProject({ projectId }, { cookie })

        expect(res.data.item.id).toBe(projectId)
      })

      it('should delete a project', async () => {
        const createInput: UserCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.userCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id

        const res = await sdk.userDeleteProject({ projectId }, { cookie })

        expect(res.data.deleted).toBe(true)

        const findRes = await sdk.userFindManyProject({ input: { search: projectId } }, { cookie })
        expect(findRes.data.paging.meta.totalCount).toBe(0)
        expect(findRes.data.paging.data.length).toBe(0)
      })
    })

    describe('unauthorized', () => {
      let cookie: string
      beforeAll(async () => {
        cookie = await getBobCookie()
      })

      it('should not create a project', async () => {
        expect.assertions(1)
        const input: UserCreateProjectInput = {
          name: uniqueId('project'),
        }

        try {
          await sdk.userCreateProject({ input }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })

      it('should not update a project', async () => {
        expect.assertions(1)
        try {
          await sdk.userUpdateProject({ projectId, input: {} }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })

      it('should not find a list of projects (find all)', async () => {
        expect.assertions(1)
        try {
          await sdk.userFindManyProject({ input: {} }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })

      it('should not find a project by id', async () => {
        expect.assertions(1)
        try {
          await sdk.userFindOneProject({ projectId }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })

      it('should not delete a project', async () => {
        expect.assertions(1)
        try {
          await sdk.userDeleteProject({ projectId }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not User')
        }
      })
    })
  })
})
