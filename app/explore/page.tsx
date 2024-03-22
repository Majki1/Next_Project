'use client';
import Navbar from "../ui/navbar";
import { Grid, rem, Image, Text } from '@mantine/core';
import Footer from "../ui/footer";

export default function ExplorePage() {
  const images = [
    // Replace these URLs with the URLs of your images
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png',
    // Add more URLs as needed
  ];

  return (
    <>
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>
      <div className="h-screen px-6 py-4">
        <Text size="xl" className="font-bold mb-4">Explore</Text>
        <Grid justify="center" className="mx-[5%] mt-[5%]">
          {images.map((image, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 space-x-4">
              <Image src={image} alt="" fit="cover" />
            </div>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}