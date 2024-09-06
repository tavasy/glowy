import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

function Products() {
  const [goalExists, setGoalExists] = useState(true);
  const location = useLocation();

  // Helper function to get query parameters
  const getQueryParams = () => {
    return new URLSearchParams(location.search);
  };

  // Extract the goal from the URL query parameters
  const goal = getQueryParams().get('goal');

  // Map goal to human-readable text
  const goalTextMap = {
    'silky-hair': 'silky hair',
    'long-hair': 'long hair',
    'blonde-hair': 'blonde hair',
    'clean-skin': 'clean skin',
    'no-dark-spots': 'no dark spots',
    'natural-makeup': 'natural makeup',
  };

  const [products, setProducts] = useState([
    {
      brand: 'Olaplex',
      title: 'No.3 Hair Perfector',
      description:
        'Repairs and strengthens all hair types, leaving your hair smoother and silkier.',
      keyBenefits: ['Repairs damage', 'Strengthens hair', 'Smooths texture'],
      link: 'https://olaplex.com',
    },
    {
      brand: 'Moroccanoil',
      title: 'Moroccanoil Treatment',
      description:
        'Infused with antioxidant-rich argan oil, it helps to smooth and nourish hair for a silky finish.',
      keyBenefits: ['Nourishes', 'Adds shine', 'Smooths frizz'],
      link: 'https://www.moroccanoil.com',
    },
    {
      brand: 'Briogeo',
      title: 'Don’t Despair, Repair! Deep Conditioning Mask',
      description:
        'An intensive weekly treatment that restores essential moisture and natural vibrancy to dry, brittle hair.',
      keyBenefits: [
        'Restores moisture',
        'Improves elasticity',
        'Strengthens hair',
      ],
      link: 'https://www.briogeohair.com',
    },
    {
      brand: 'Pureology',
      title: 'Hydrate Shampoo',
      description:
        'A sulfate-free, hydrating shampoo that leaves hair soft, shiny, and silky.',
      keyBenefits: ['Hydrates', 'Softens hair', 'Color protection'],
      link: 'https://www.pureology.com',
    },
    {
      brand: 'Kerastase',
      title: 'Elixir Ultime Hair Oil',
      description:
        'A versatile hair oil for all hair types that leaves hair looking shiny and feeling silky.',
      keyBenefits: ['Adds shine', 'Nourishes', 'Smooths frizz'],
      link: 'https://www.kerastase-usa.com',
    },
    {
      brand: 'Living Proof',
      title: 'No Frizz Nourishing Styling Cream',
      description:
        'Blocks humidity and smooths hair to give you frizz-free, silky hair.',
      keyBenefits: ['Frizz control', 'Adds smoothness', 'Hydrates'],
      link: 'https://www.livingproof.com',
    },
    {
      brand: 'Redken',
      title: 'All Soft Argan-Oil Enriched Shampoo',
      description:
        'Designed to soften dry and brittle hair, making it feel silky and hydrated.',
      keyBenefits: ['Softens', 'Hydrates', 'Improves manageability'],
      link: 'https://www.redken.com',
    },
    {
      brand: "L'Oreal Professionnel",
      title: 'Serie Expert Absolut Repair Gold Masque',
      description:
        'Nourishes and repairs damaged hair for a smoother and silkier texture.',
      keyBenefits: ['Repairs damage', 'Adds smoothness', 'Hydrates'],
      link: 'https://www.lorealprofessionnel.com',
    },
    {
      brand: 'SheaMoisture',
      title: 'Manuka Honey & Mafura Oil Intensive Hydration Hair Masque',
      description:
        'Deeply conditions and restores moisture, leaving hair smooth and silky.',
      keyBenefits: ['Deep hydration', 'Restores softness', 'Nourishes'],
      link: 'https://www.sheamoisture.com',
    },
    // {
    //   brand: 'Verb',
    //   title: 'Ghost Oil',
    //   description:
    //     'A lightweight hair oil that smooths frizz, adds shine, and leaves hair feeling silky.',
    //   keyBenefits: ['Frizz control', 'Adds shine', 'Weightless hydration'],
    //   link: 'https://www.verbproducts.com',
    // },
    // {
    //   brand: 'Amika',
    //   title: 'The Kure Intense Bond Repair Mask',
    //   description:
    //     'An intensive treatment that deeply nourishes and repairs damaged hair for a silky finish.',
    //   keyBenefits: ['Repairs damage', 'Adds smoothness', 'Strengthens hair'],
    //   link: 'https://www.loveamika.com',
    // },
    // {
    //   brand: 'Oribe',
    //   title: 'Gold Lust Repair & Restore Shampoo',
    //   description:
    //     'Revitalizes and restores hair, leaving it smooth, soft, and shiny.',
    //   keyBenefits: ['Restores vitality', 'Adds smoothness', 'Improves shine'],
    //   link: 'https://www.oribe.com',
    // },
    // {
    //   brand: 'Pantene',
    //   title: 'Pro-V Smooth and Sleek Conditioner',
    //   description:
    //     'Smooths and moisturizes hair, leaving it sleek and silky without the frizz.',
    //   keyBenefits: ['Frizz control', 'Hydrates', 'Smoothes hair'],
    //   link: 'https://www.pantene.com',
    // },
    // {
    //   brand: 'Garnier',
    //   title: 'Whole Blends Coconut Oil & Cocoa Butter Smoothing Shampoo',
    //   description:
    //     'Enriched with coconut oil, it softens and smooths dry, frizzy hair for a silky texture.',
    //   keyBenefits: ['Smooths', 'Softens', 'Nourishes'],
    //   link: 'https://www.garnierusa.com',
    // },
    // {
    //   brand: 'Aussie',
    //   title: '3 Minute Miracle Moist Deep Conditioner',
    //   description:
    //     'A deep conditioner that works in minutes to moisturize dry, damaged hair, leaving it silky smooth.',
    //   keyBenefits: ['Deep hydration', 'Repairs damage', 'Quick results'],
    //   link: 'https://www.aussie.com',
    // },
  ]);

  // useEffect(() => {
  //   if (!goal) {
  //     setGoalExists(false); // Set this to false if no goal is provided
  //     return;
  //   }

  //   setGoalExists(true);

  //   async function fetchPersonalProducts() {
  //     try {
  //       const response = await fetch(
  //         'http://localhost:5050/api/personal-products?goal=${goal}',
  //       );
  //       const data = await response.json();
  //       setProducts(data.products);
  //     } catch (error) {
  //       console.error('Error fetching personal products:', error);
  //     }
  //   }

  //   fetchPersonalProducts();
  // }, [goal]);

  // if (!goalExists) {
  //   return (
  //     <div className="container">
  //       <Navbar />
  //       <div className="container-top-text">
  //         <h2>Please choose a goal</h2>
  //       </div>
  //       <Footer />
  //     </div>
  //   );
  // }

  return (
    <div className="container">
      <Navbar />
      <div className="container-top-text">
        <h2 className="text-products-image">
          Best&nbsp;
          <span className="goal-text">trending</span>
          &nbsp;products for
          <span className="goal-text">&nbsp;{goalTextMap[goal]}</span>
        </h2>
      </div>
      <div className="container-personal-products">
        <div className="product-cards">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              brand={product.brand}
              title={product.title}
              description={product.description}
              keyBenefits={product.keyBenefits}
              link={product.link}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
