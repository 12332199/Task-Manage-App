import React from 'react'
import Tasks from './Tasks'

describe("Tasks", () =>{
    it("When loading is true then loading text should be display",()=>{
        render(<Tasks tasks={false} />)
    })
})