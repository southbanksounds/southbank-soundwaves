import { Card } from "@/components/ui/card";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/13bf8f0b-2b67-4a56-ad49-0432cd412931.png",
      alt: "Southbank band members relaxing on teal couch in cozy studio space with brick walls"
    },
    {
      src: "/lovable-uploads/f9d7cc4d-cafc-418d-9900-64d57dc03c15.png", 
      alt: "Southbank five-piece band sitting together on couch in warm studio setting"
    },
    {
      src: "/lovable-uploads/4d5f0164-dbd7-477f-90b8-61cd94868261.png",
      alt: "Southbank band members in casual studio pose with some sitting and standing"
    },
    {
      src: "/lovable-uploads/e64e014a-1ba8-4ddb-afe5-492e7675a664.png",
      alt: "Southbank performing live with full band setup including keys, bass, guitar and drums"
    },
    {
      src: "/lovable-uploads/414996e7-f8f9-4d7d-8099-cad289fd18ba.png",
      alt: "Southbank guitarist in intimate rehearsal setting with orange guitar visible in foreground"
    },
    {
      src: "/lovable-uploads/9ad0f9f7-308d-4a5e-b255-ecb851e2a50d.png",
      alt: "Tony Lynch on drums with red Pearl kit, smiling during rehearsal"
    },
    {
      src: "/lovable-uploads/d0a0443e-f2ae-45c9-a434-4eac6208e110.png",
      alt: "Sam Favata on lead guitar, focused during performance in casual setting"
    },
    {
      src: "/lovable-uploads/881a9465-63ab-4492-9991-569a8366f075.png",
      alt: "Amanda Thompson on keys and Sean Heffernan on bass during rehearsal"
    },
    {
      src: "/lovable-uploads/03169752-8bd2-49b1-9cb3-479e9528f582.png",
      alt: "Sean Heffernan playing white bass guitar in bright studio with high ceilings"
    },
    {
      src: "/lovable-uploads/f46c743d-6c69-47a1-8a91-6062819b8ea6.png",
      alt: "Jeff Neely singing and playing orange hollow-body guitar, looking upward"
    },
    {
      src: "/lovable-uploads/c16affaf-90f4-4b5d-86e4-4d9cf7def07c.png",
      alt: "Southbank band members posing together against weathered wall with artistic lettering"
    },
    {
      src: "/lovable-uploads/05c5879e-9f91-4f05-b88a-f3ae28922261.png",
      alt: "Southbank performing live on stage with colorful lighting and full band setup"
    }
  ];

  const videos = [
    {
      src: "https://www.youtube.com/embed/ggCygyJNlFE",
      title: "Southbank Sampler",
      description: "Four songs in two minutes"
    },
    {
      src: "https://www.youtube.com/embed/I6JiLn0dd9Q",
      title: "'Decide' live at the Sahara Lounge",
      description: "August 17, 2025"
    },
    {
      src: "https://www.youtube.com/embed/LkIMf9IhPvo",
      title: "'Can't Say Why' lyrics video",
      description: ""
    },
    {
      src: "https://www.youtube.com/embed/i0zGBnn5ZD0",
      title: "Best Mistake music video",
      description: ""
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visual moments from our journey - live performances, studio sessions, and behind-the-scenes glimpses.
          </p>
        </div>

        {/* Photo Gallery */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Photos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden bg-card border-border hover:shadow-glow transition-all duration-500 cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                 <div className="relative">
                   <OptimizedImage
                     src={image.src}
                     alt={image.alt}
                     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                     sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                   />
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    </div>
                 </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-foreground text-center">
            Videos
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-glow transition-all duration-500">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <iframe
                    className="w-full h-full"
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {video.title}
                </h3>
                <p className="text-muted-foreground">
                  {video.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative">
            <OptimizedImage
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-glow"
              sizes="(max-width: 768px) 90vw, 80vw"
              priority
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-foreground bg-background/80 rounded-full p-2 hover:bg-background transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;