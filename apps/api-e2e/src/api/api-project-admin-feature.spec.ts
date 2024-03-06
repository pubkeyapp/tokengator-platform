import { AdminCreateProjectInput, AdminFindManyProjectInput, AdminUpdateProjectInput, Project } from '@tokengator/sdk'
import { getAliceCookie, getBobCookie, sdk, uniqueId } from '../support'

describe('api-project-feature', () => {
  describe('api-project-admin-resolver', () => {
    const projectName = uniqueId('acme-project')
    let projectId: string
    let cookie: string

    beforeAll(async () => {
      cookie = await getAliceCookie()
      const created = await sdk.adminCreateProject({ input: { name: projectName } }, { cookie })
      projectId = created.data.created.id
    })

    describe('authorized', () => {
      beforeAll(async () => {
        cookie = await getAliceCookie()
      })

      it('should create a project', async () => {
        const input: AdminCreateProjectInput = {
          name: uniqueId('project'),
        }

        const res = await sdk.adminCreateProject({ input }, { cookie })

        const item: Project = res.data.created
        expect(item.name).toBe(input.name)
        expect(item.id).toBeDefined()
        expect(item.createdAt).toBeDefined()
        expect(item.updatedAt).toBeDefined()
      })

      it('should update a project', async () => {
        const createInput: AdminCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.adminCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id
        const input: AdminUpdateProjectInput = {
          name: uniqueId('project'),
        }

        const res = await sdk.adminUpdateProject({ projectId, input }, { cookie })

        const item: Project = res.data.updated
        expect(item.name).toBe(input.name)
      })

      it('should find a list of projects (find all)', async () => {
        const createInput: AdminCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.adminCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id

        const input: AdminFindManyProjectInput = {}

        const res = await sdk.adminFindManyProject({ input }, { cookie })

        expect(res.data.paging.meta.totalCount).toBeGreaterThan(1)
        expect(res.data.paging.data.length).toBeGreaterThan(1)
        // First item should be the one we created above
        expect(res.data.paging.data[0].id).toBe(projectId)
      })

      it('should find a list of projects (find new one)', async () => {
        const createInput: AdminCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.adminCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id

        const input: AdminFindManyProjectInput = {
          search: projectId,
        }

        const res = await sdk.adminFindManyProject({ input }, { cookie })

        expect(res.data.paging.meta.totalCount).toBe(1)
        expect(res.data.paging.data.length).toBe(1)
        expect(res.data.paging.data[0].id).toBe(projectId)
      })

      it('should find a project by id', async () => {
        const createInput: AdminCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.adminCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id

        const res = await sdk.adminFindOneProject({ projectId }, { cookie })

        expect(res.data.item.id).toBe(projectId)
      })

      it('should delete a project', async () => {
        const createInput: AdminCreateProjectInput = {
          name: uniqueId('project'),
        }
        const createdRes = await sdk.adminCreateProject({ input: createInput }, { cookie })
        const projectId = createdRes.data.created.id

        const res = await sdk.adminDeleteProject({ projectId }, { cookie })

        expect(res.data.deleted).toBe(true)

        const findRes = await sdk.adminFindManyProject({ input: { search: projectId } }, { cookie })
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
        const input: AdminCreateProjectInput = {
          name: uniqueId('project'),
        }

        try {
          await sdk.adminCreateProject({ input }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })

      it('should not update a project', async () => {
        expect.assertions(1)
        try {
          await sdk.adminUpdateProject({ projectId, input: {} }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })

      it('should not find a list of projects (find all)', async () => {
        expect.assertions(1)
        try {
          await sdk.adminFindManyProject({ input: {} }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })

      it('should not find a project by id', async () => {
        expect.assertions(1)
        try {
          await sdk.adminFindOneProject({ projectId }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })

      it('should not delete a project', async () => {
        expect.assertions(1)
        try {
          await sdk.adminDeleteProject({ projectId }, { cookie })
        } catch (e) {
          expect(e.message).toBe('Unauthorized: User is not Admin')
        }
      })
    })
  })
})
