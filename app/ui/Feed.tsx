import CardComponent from "./profileCard";

// Sample data
const cardData = [
    { companyName: 'Company 1', description: 'Description 1' },
    { companyName: 'Company 2', description: 'Description 2' },
    { companyName: 'Company 3', description: 'Description 3' },
    { companyName: 'Company 4', description: 'Description 4' },
    { companyName: 'Company 5', description: 'Description 5' },
    { companyName: 'Company 6', description: 'Description 6' },
    { companyName: 'Company 7', description: 'Description 7' },
    { companyName: 'Company 8', description: 'Description 8' },
    { companyName: 'Company 9', description: 'Description 9' },
    { companyName: 'Company 10', description: 'Description 10' },
  ];

export default function Feed() {
  return (
    <div className="h-auto grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
    {cardData.map((data, index) => (
        <CardComponent 
          key={index} 
          companyName={data.companyName} 
          description={data.description} 
          href={`/company/${index}?id=${index}`} 
          id={index}
        />
      ))}
    </div>
  );
}