describe("", () => {
    it("GET", () => {
        cy.request("GET", "https://dummy.restapiexample.com/api/v1/employees")
            .its('status')
            .should('equal', 200);
    })


    it("POST", () => {
        cy.request({

            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {

                "userId": 1,
                "id": 1,
                "title": "cypress HTTP post",
                "body": "post request"

            }
        })
            .its('status')
            .should('equal', 201);
    })

    it("PUT", () => {
        cy.request({

            method: 'POST',
            url: "https://jsonplaceholder.typicode.com/posts",
            body: {

                "userId": 1,
                "id": 1,
                "title": "cypress HTTP post",
                "body": "post request"

            }
        })
            .its('status')
            .should('equal', 201);
    })
    it("Put Call",  ()=>
        {
    
            cy.request( {
                        method: 'PUT',
                        url: "https://jsonplaceholder.typicode.com/posts/1",
                        body: {
                            title: "Test post - Updated",
                            body: "This is put call ",
                            userId: 1,
                            id: 1
                         }
                        } )    
            .its('status')
            .should('equal', 200);
        })
    
           it.only("Delete Call", ()=>
           {
                cy.request({  
                            method: 'DELETE',
                            url: "https://jsonplaceholder.typicode.com/posts/1"
                   })
            .its('status')
            .should('equal', 200);
    
           })
    
})