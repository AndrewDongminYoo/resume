"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TreePineIcon,
  UsersIcon,
  MessageSquareIcon,
  UserIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [activeTab, setActiveTab] = useState("nearby");

  const nearbyPets = [
    {
      id: 1,
      petName: "Buddy",
      ownerName: "John",
      species: "Dog",
      breed: "Golden Retriever",
      distance: 0.5,
      profile: "https://images.unsplash.com/photo-1422565096762-bdb997a56a84",
    },
    {
      id: 2,
      petName: "Luna",
      ownerName: "Emma",
      species: "Cat",
      breed: "Siamese",
      distance: 0.8,
      profile: "https://images.unsplash.com/photo-1523863745117-a610a34eb231",
    },
    {
      id: 3,
      petName: "Max",
      ownerName: "Sophia",
      species: "Dog",
      breed: "German Shepherd",
      distance: 1.2,
      profile:
        "https://plus.unsplash.com/premium_photo-1661962850828-0ebd5c3be7b1",
    },
  ];

  const favoriteLocations = [
    { id: 1, name: "Central Park", type: "Park", distance: 1.5 },
    { id: 2, name: "Riverside Trail", type: "Trail", distance: 2.3 },
    { id: 3, name: "Dog Beach", type: "Beach", distance: 3.7 },
  ];

  const similarWalkers = [
    {
      id: 1,
      name: "Alice",
      pets: 2,
      preferredTime: "Morning",
      profile:
        "https://plus.unsplash.com/premium_photo-1687832783818-8857f0c07ea4",
    },
    {
      id: 2,
      name: "Bob",
      pets: 1,
      preferredTime: "Evening",
      profile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    },
    {
      id: 3,
      name: "Carol",
      pets: 3,
      preferredTime: "Afternoon",
      profile:
        "https://plus.unsplash.com/premium_photo-1693000697180-4e285198d71c",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 bg-background">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">PetSocial</h1>
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/82999715?v=4"
            width={40}
            height={40}
            alt="Andrew"
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </header>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="col-span-2">
          <CardHeader className="pb-2">
            <CardTitle>Map View</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted h-64 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6328.650213227163!2d126.92148071484145!3d37.52383293564967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9f227cb7d1c1%3A0x106cea0f2a17ac4e!2sYeouido%20Park!5e0!3m2!1sen!2skr!4v1724384150755!5m2!1sen!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
              <span className="sr-only">Map Placeholder</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Nearby Pets</span>
                <Badge>{nearbyPets.length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Favorite Locations</span>
                <Badge>{favoriteLocations.length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Similar Walkers</span>
                <Badge>{similarWalkers.length}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-6">
        <div className="flex space-x-2 mb-4">
          <Button
            variant={activeTab === "nearby" ? "default" : "outline"}
            onClick={() => setActiveTab("nearby")}
          >
            Nearby Pets
          </Button>
          <Button
            variant={activeTab === "locations" ? "default" : "outline"}
            onClick={() => setActiveTab("locations")}
          >
            Favorite Locations
          </Button>
          <Button
            variant={activeTab === "walkers" ? "default" : "outline"}
            onClick={() => setActiveTab("walkers")}
          >
            Similar Walkers
          </Button>
        </div>

        {activeTab === "nearby" && (
          <div className="space-y-4">
            {nearbyPets.map((pet) => (
              <Card key={pet.id}>
                <CardContent className="flex items-center p-4">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage
                      src={pet.profile}
                      height={64}
                      width={64}
                      alt={pet.petName}
                    />
                    <AvatarFallback>{pet.petName[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{pet.petName}</h3>
                    <p className="text-sm text-muted-foreground">
                      Owner: {pet.ownerName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {pet.species} - {pet.breed}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {pet.distance} miles away
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "locations" && (
          <div className="space-y-4">
            {favoriteLocations.map((location) => (
              <Card key={location.id}>
                <CardContent className="flex items-center p-4">
                  <TreePineIcon className="h-12 w-12 mr-4 text-primary" />
                  <div>
                    <h3 className="font-semibold">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {location.type}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {location.distance} miles away
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "walkers" && (
          <div className="space-y-4">
            {similarWalkers.map((walker) => (
              <Card key={walker.id}>
                <CardContent className="flex items-center p-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={walker.profile}
                      height={48}
                      width={48}
                      alt={walker.name}
                    />
                    <AvatarFallback>{walker.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{walker.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {walker.pets} pets
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Prefers {walker.preferredTime} walks
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <footer className="border-t pt-4">
        <nav className="flex justify-around">
          <Button variant="ghost">
            <UsersIcon className="h-6 w-6" />
            <span className="sr-only">Nearby</span>
          </Button>
          <Button variant="ghost">
            <TreePineIcon className="h-6 w-6" />
            <span className="sr-only">Locations</span>
          </Button>
          <Button variant="ghost">
            <MessageSquareIcon className="h-6 w-6" />
            <span className="sr-only">Messages</span>
          </Button>
          <Button variant="ghost">
            <UserIcon className="h-6 w-6" />
            <span className="sr-only">Profile</span>
          </Button>
        </nav>
      </footer>
    </div>
  );
}
