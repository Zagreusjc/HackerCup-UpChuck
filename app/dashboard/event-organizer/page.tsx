"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Users, Search, Sparkles, Settings } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EventOrganizerDashboard() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [spaceTypeFilter, setSpaceTypeFilter] = useState("")

  // Mock data for available spaces - updated for popup events
  const availableSpaces = [
    {
      id: 1,
      name: "Artisan Corner Cafe",
      type: "Cafe Corner",
      location: "Makati City",
      size: "25 sqm",
      price: "₱3,500/day",
      rating: 4.8,
      image: "/modern-cafe-interior.png",
      amenities: ["Power Outlets", "Display Tables", "Foot Traffic", "Storage"],
      availability: "Available",
    },
    {
      id: 2,
      name: "Creative Gallery Space",
      type: "Gallery Space",
      location: "BGC, Taguig",
      size: "40 sqm",
      price: "₱5,000/day",
      rating: 4.9,
      image: "/art-gallery-white-walls.png",
      amenities: ["Display Walls", "Lighting", "Security", "Parking"],
      availability: "Available",
    },
    {
      id: 3,
      name: "Market Stall Corner",
      type: "Market Stall",
      location: "Quezon City",
      size: "15 sqm",
      price: "₱2,000/day",
      rating: 4.6,
      image: "/cozy-bookstore.png",
      amenities: ["Covered Area", "Storage", "High Traffic"],
      availability: "Booked until Feb 15",
    },
  ]

  const myBookings = [
    {
      id: 1,
      spaceName: "Vintage Market Corner",
      eventTitle: "Thrift Clothing Pop-up",
      date: "Jan 25-27, 2025",
      status: "Confirmed",
      total: "₱10,500",
    },
    {
      id: 2,
      spaceName: "Artisan Food Court",
      eventTitle: "Homemade Food Stall",
      date: "Feb 10-12, 2025",
      status: "Pending",
      total: "₱9,000",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-secondary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">plook</h1>
                <p className="text-sm text-muted-foreground">Occupant Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={() => router.push("/login")}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Find Your Perfect Space</h2>
          <p className="text-muted-foreground">Discover spaces for arts & crafts, thrift sales, food stalls and more</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Bookings</p>
                  <p className="text-2xl font-bold text-foreground">2</p>
                </div>
                <Calendar className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                  <p className="text-2xl font-bold text-foreground">12</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
                  <p className="text-2xl font-bold text-foreground">₱95,000</p>
                </div>
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold text-foreground">98%</p>
                </div>
                <div className="h-8 w-8 bg-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-secondary text-sm font-bold">★</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search and Browse Spaces */}
          <div className="lg:col-span-2">
            {/* Search and Filters */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Browse Available Spaces</CardTitle>
                <CardDescription>Find the perfect space for your popup event</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search spaces..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="makati">Makati City</SelectItem>
                      <SelectItem value="bgc">BGC, Taguig</SelectItem>
                      <SelectItem value="qc">Quezon City</SelectItem>
                      <SelectItem value="manila">Manila</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={spaceTypeFilter} onValueChange={setSpaceTypeFilter}>
                    <SelectTrigger className="w-full md:w-48">
                      <SelectValue placeholder="Space Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cafe">Cafe Corner</SelectItem>
                      <SelectItem value="gallery">Gallery Space</SelectItem>
                      <SelectItem value="retail">Market Stall</SelectItem>
                      <SelectItem value="outdoor">Outdoor Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Available Spaces */}
            <div className="space-y-6">
              {availableSpaces.map((space) => (
                <Card key={space.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <img
                          src={space.image || "/placeholder.svg"}
                          alt={space.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold">{space.name}</h3>
                          <div className="text-right">
                            <p className="text-lg font-bold text-green-600">{space.price}</p>
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500">★</span>
                              <span className="text-sm text-gray-600">{space.rating}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <Sparkles className="h-4 w-4" />
                            {space.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {space.location}
                          </span>
                          <span>{space.size}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {space.amenities.map((amenity, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <Badge
                            variant={space.availability === "Available" ? "secondary" : "outline"}
                            className={
                              space.availability === "Available"
                                ? "bg-secondary/20 text-secondary-foreground border-secondary/30"
                                : ""
                            }
                          >
                            {space.availability}
                          </Badge>
                          <Button
                            disabled={space.availability !== "Available"}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            {space.availability === "Available" ? "Book Now" : "View Details"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* My Bookings */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>My Bookings</CardTitle>
                <CardDescription>Your current and upcoming events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myBookings.map((booking) => (
                    <div key={booking.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sm text-foreground">{booking.eventTitle}</h4>
                        <Badge
                          variant={booking.status === "Confirmed" ? "secondary" : "outline"}
                          className={
                            booking.status === "Confirmed"
                              ? "bg-secondary/20 text-secondary-foreground border-secondary/30"
                              : "bg-accent/20 text-accent-foreground border-accent/30"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{booking.spaceName}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{booking.date}</span>
                        <span className="font-medium text-secondary">{booking.total}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  View All Bookings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
