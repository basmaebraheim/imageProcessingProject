import supertest from "supertest";
import app from "../index";

const request = supertest(app)
describe("test resize api ", (): void => {
     
    describe("validate height", (): void => {
        it("check if height is required", async (): Promise<void> => {
            const response = await request.get("/resize/?name=encenadaport&width=900")
            expect(response.status).toBe(400)
        })
        it("check if valid height is required", async (): Promise<void> => {
            const response = await request.get("/resize/?name=encenadaport&width=900&height=xx")
            expect(response.status).toBe(400)
        })
    })

    describe("validate width", (): void => {
        it("check if width is required", async (): Promise<void> => {
            const response = await request.get("/resize/?name=encenadaport&height=900")
            expect(response.status).toBe(400)
        })
        it("check if valid width is required", async (): Promise<void> => {
            const response = await request.get("/resize/?name=encenadaport&height=900&width=xx")
            expect(response.status).toBe(400)
        })
    })

    describe("validate image", (): void => {
        it("check if image is required", async (): Promise<void> => {
            const response = await request.get("/resize/?width=900&height=600")
            expect(response.status).toBe(400)
        })

        it("check if valid image is required", async (): Promise<void> => {
            const response = await request.get("/resize/?image=wrongImageName.jpg&width=900&height=600")
            expect(response.status).toBe(404)
        })
    }) 
})
