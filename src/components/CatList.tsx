import React from 'react'

interface CatListProps {
  gender: string
  cats: string[]
}

const CatList: React.FC<CatListProps> = ({ gender, cats }) => (
  <div>
    <h2>{gender}</h2>
    <ul>
      {cats.map((cat) => (
        <li key={cat}>{cat}</li>
      ))}
    </ul>
  </div>
)

export default CatList
