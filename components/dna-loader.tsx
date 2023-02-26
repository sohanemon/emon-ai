import { Dna } from 'react-loader-spinner';

export default function DnaLoader() {
  return (
    <div className='mx-auto mt-20 rotate-90 w-min'>
      <Dna
        visible={true}
        height='80'
        width='80'
        ariaLabel='Image fetching'
        wrapperStyle={{ color: 'red' }}
        wrapperClass='dna-wrapper'
      />
    </div>
  );
}
