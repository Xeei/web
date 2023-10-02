import { GetServerSideProps } from 'next';
import axios from 'axios';
import { Fragment } from 'react';

interface DataProp {
  title: string;
  // Include any other keys that data might have
}

interface PageProps {
  data: DataProp[] | null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let data: DataProp | null = null;
  let url ='https://api.api-ninjas.com/v1/airlines?name=Singapore Airlines'
  
  try {
    const res = await axios.get(url, {
        headers: {
            'X-Api-Key': process.env.API_NINJA_KEY,
        }
    });
    console.log(res.data);
    data = res.data;
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

const Page: React.FC<PageProps> = ({ data }) => {
  // Render your component
  return <div>
    {data?.map((item: any, index: number) => {
        return <Fragment key={index}>
            <img src={item.logo_url} alt={item.name} />
            <h1>{item.name}</h1>
        </Fragment>
        }
    )}
  </div>
}

export default Page;
