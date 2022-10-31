import React from "react"
import { render, screen } from "@testing-library/react"

import { Main } from "../Components/Main"

describe("Montar la pagina principal", () => {
  it("debe mostrar el titulo de la pagina principal", () => {
    render(<Main />)
    expect(screen.getByText(/Listado de Pokemon/i)).toBeInTheDocument()
  })
})