import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'faisal-hills-residency',
    title: 'Faisal Hills Residency',
    category: 'Residential',
    location: 'Faisal Hills, Taxila/Islamabad',
    description: 'A premium residential complex offering state-of-the-art living spaces in the heart of Faisal Hills.',
    fullDescription: 'Faisal Hills Residency is our flagship project in the rapidly developing Faisal Hills area. Surrounded by the Margalla hills, this project offers a unique blend of nature and luxury. Each unit is designed with high ceilings, large windows for natural light, and premium burgundy-toned interior accents.',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1600607687940-c52fe0463949?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    features: ['24/7 Security', 'Smart Home Integration', 'Roof Garden', 'Gym & Spa'],
    status: 'In Progress'
  },
  {
    id: 'islamabad-heights',
    title: 'Islamabad Heights',
    category: 'Commercial',
    location: 'E-11, Islamabad',
    description: 'Modern office spaces designed for the next generation of businesses.',
    fullDescription: 'Located in the prime sector of E-11, Islamabad Heights redefined commercial architecture. With a sleek glass facade and efficient floor plans, it serves as the headquarters for several multinational firms.',
    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&h=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    features: ['High-speed Elevators', 'Business Lounge', 'Ample Parking', 'Fiber-optic connectivity'],
    status: 'Completed'
  },
  {
    id: 'margalla-view-villas',
    title: 'Margalla View Villas',
    category: 'Development',
    location: 'D-12, Islamabad',
    description: 'Exclusive villas offering breathtaking views of the Margalla Hills.',
    fullDescription: 'The Margalla View Villas are a testament to our commitment to luxury. Each villa features custom finishes, private pools, and landscaping that complements the natural surrounding beauty of Islamabad.',
    thumbnail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&h=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&h=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-1203b202a947?auto=format&fit=crop&w=1200&h=800&q=80'
    ],
    features: ['Private Pool', 'Custom Landscaping', 'Home Cinema', 'Eco-friendly design'],
    status: 'Completed'
  }
];
