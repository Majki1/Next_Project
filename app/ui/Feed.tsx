import CardComponent from "./profileCard";

// Sample data
const cardData = [
    { companyName: 'Company 1', description: 'Description 1' },
    { companyName: 'Company 2', description: 'Description 2' },
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
        />
      ))}
    </div>
  );
}