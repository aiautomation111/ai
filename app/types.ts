// types.ts
export interface ServiceData {
  hero: {
    title: string;
    description: string;
    img:string
  };
  features: {
    imageUrl: string;
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  process: {
    title: string;
    description: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    description: string;
    clients: {
      avatarUrl: string;
      name: string;
      role: string;
      quote: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}