import React from 'react'
import { useFetchCats } from './hooks/useFetchCats'
import CatList from './components/CatList'

const App: React.FC = () => {
  // const [cats, setCats] = useState<{ [key: string]: string[] }>({});
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  const { cats, loading, error } = useFetchCats()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json');
  //       const data: Owner[] = response.data;

  //       const catsByGender: { [key: string]: string[] } = {};
  //       data.forEach(owner => {
  //         if (owner.pets) {
  //           owner.pets.forEach(pet => {
  //             if (pet.type.toLowerCase() === 'cat') {
  //               if (!catsByGender[owner.gender]) {
  //                 catsByGender[owner.gender] = [];
  //               }
  //               catsByGender[owner.gender].push(pet.name);
  //             }
  //           });
  //         }
  //       });

  //       for (const gender in catsByGender) {
  //         catsByGender[gender].sort();
  //       }
  //       setCats(catsByGender);
  //     } catch (error) {
  //       setError('Failed to load data. Please try again later.');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>Cat List</h1>
      {Object.keys(cats).map((gender) => (
        <CatList key={gender} gender={gender} cats={cats[gender]} />
      ))}
    </div>
  )
}

export default App
