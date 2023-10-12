describe('HTTPS Request', () => {
  
    it("Get all users", () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users',
            qs: {page: 2}
        })
        .then((response) => {
            expect(response.status).equal(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.data[1]).has.property('first_name', 'Lindsay')
        })
    })

    it("Get single user", () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users/2',
        })
        .then((response) => {
            expect(response.status).equal(200)
            expect(response.body.data).has.property('last_name', 'Weaver')
        })
    })

    it("POST create new user", () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "nabil",
                "job": "employee"
            }
        })
        .then((response) => {
            expect(response.status).equal(201)
            expect(response.body).has.property('name', 'nabil')
            expect(response.body).has.property('job', 'employee')
        })
    })

    it("PUT update user", () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "nabil ahmed",
                "job": "senior engineer"
            }
        })
        .then((response) => {
            expect(response.status).equal(200)
            expect(response.body).has.property('name', 'nabil ahmed')
            expect(response.body).has.property('job', 'senior engineer')
        })
    })

    it("PATCH update user", () => {
        cy.request({
            method: "PATCH",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "nabil ahmed nahid",
                "job": "senior engineer"
            }
        })
        .then((response) => {
            expect(response.status).equal(200)
            expect(response.body).has.property('name', 'nabil ahmed nahid')
            expect(response.body).has.property('job', 'senior engineer')
        })
    })

    it("DELETE user", () => {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2",
        })
        .its('status')
        .should('equal', 204)
    })
})
