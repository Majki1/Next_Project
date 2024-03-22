'use client';
import  NavbarFront  from "@/app/ui/navbarFront";
import RecommendedProfiles from "./ui/profiles";
import { Text, Space, ScrollAreaAutosize, Select } from '@mantine/core';
import { Carousel, CarouselSlide } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import CardComponent from "./ui/profileCard";
import Footer from "./ui/footer";
import { IconDroplet, IconFilter, IconGlassCocktail, IconHandClick, IconHandStop, IconRazor, IconScissors, IconWeight, } from "@tabler/icons-react";
import clasess from './carousel.module.css';
import MessageIcon from "./ui/messageIcon";
import { useMediaQuery } from '@mantine/hooks';

export default function Page() {
  const isSmallScreen = useMediaQuery('(max-width: 768px)');
  const filters = [
    { icon: <IconScissors size={20} />, title: 'Hair Salons' },
    { icon: <IconRazor size={20} />, title: 'Barbers' },
    { icon: <IconHandStop size={20} />, title: 'Massage salons' },
    { icon: <IconHandClick size={20} />, title: 'Nail salons' },
    { icon: <IconGlassCocktail size={20} />, title: 'Restaurants' },
    { icon: <IconDroplet size={20} />, title: 'Spas' },
    { icon: <IconWeight size={20} />, title: 'Gyms' },
    { icon: <IconFilter size={20} />, title: 'More Filters' },
  ];

  const toggleModal = () => {
    console.log('toggled');
  }

  return (
    <>
    <div className="bg-neutral-800 h-auto w-screen">
      <div className="sticky top-0 z-40">
      <NavbarFront />
      </div>
      <div className="m-10">
      {isSmallScreen ? (
      <Select
        classNames={{dropdown: 'text-white', option: 'hover:text-black'}}
        placeholder="Select filter"
        data={filters.map((filter, index) => ({ value: index.toString(), label: filter.title }))}
        className="w-full"
      />
    ) : (
      <Carousel withControls draggable align='start' classNames={clasess}>
        {filters.map((filter, index) => (
          <button key={index} style={{ minWidth: '10%' }} className="button text-gray-400 flex flex-col col-span-2 items-center hover:text-white">
            {filter.icon}
            <Text ta='center' size="xs" className="text w-auto">{filter.title}</Text>
          </button>
        ))}
      </Carousel>
    )}
            <Space h='xl'/>
            <div className="h-auto grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </div>
        </div>
        <MessageIcon />
    <Footer />
    </>
  );
}

