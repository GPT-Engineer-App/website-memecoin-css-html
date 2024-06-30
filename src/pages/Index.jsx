import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to MemeCoin</h1>
        <p className="text-xl mb-8">The future of meme-based cryptocurrency</p>
        <Button variant="outline" className="text-white border-white">
          Get Started
        </Button>
      </section>

      <Separator />

      {/* Features Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Features</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <Card className="w-80 m-4">
            <CardHeader>
              <CardTitle>Fast Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Experience lightning-fast transactions with MemeCoin.</p>
            </CardContent>
          </Card>
          <Card className="w-80 m-4">
            <CardHeader>
              <CardTitle>Secure</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Top-notch security to keep your assets safe.</p>
            </CardContent>
          </Card>
          <Card className="w-80 m-4">
            <CardHeader>
              <CardTitle>Community Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Join a vibrant community of meme enthusiasts.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-10">Roadmap</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          <Card className="w-80 m-4">
            <CardHeader>
              <CardTitle>Q1 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Launch of MemeCoin and initial marketing campaign.</p>
            </CardContent>
          </Card>
          <Card className="w-80 m-4">
            <CardHeader>
              <CardTitle>Q2 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Partnerships with major meme influencers.</p>
            </CardContent>
          </Card>
          <Card className="w-80 m-4">
            <CardHeader>
              <CardTitle>Q3 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Introduction of MemeCoin staking and rewards.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer className="py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <p>&copy; 2023 MemeCoin. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;