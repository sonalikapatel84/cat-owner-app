import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CatList from './CatList'

describe('CatList Component', () => {
  // Test rendering with provided props
  test('renders the gender and list of cats', () => {
    const gender = 'Male'
    const cats = ['Garfield', 'Tom']

    render(<CatList gender={gender} cats={cats} />)

    // Check if the gender is displayed
    expect(screen.getByText(gender)).toBeInTheDocument()

    // Check if each cat name is displayed
    cats.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument()
    })
  })

  // Test rendering with an empty list of cats
  test('renders without crashing when there are no cats', () => {
    const gender = 'Female'
    const cats: string[] = []

    render(<CatList gender={gender} cats={cats} />)

    // Check if the gender is displayed
    expect(screen.getByText(gender)).toBeInTheDocument()

    // Check if no cats are displayed
    expect(screen.queryByRole('list')).toBeEmptyDOMElement()
  })

  // Test snapshot rendering
  test('matches the snapshot', () => {
    const gender = 'Male'
    const cats = ['Garfield', 'Tom']

    const { asFragment } = render(<CatList gender={gender} cats={cats} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
