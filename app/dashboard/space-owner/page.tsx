"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Calendar, MapPin, Users, DollarSign, Settings } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SpaceOwnerDashboard() {
  const router = useRouter()

  // Mock data for demonstration
  const spaceData = {
    name: "Artisan Corner Cafe",
    type: "Cafe Corner",
    location: "Makati City, Metro Manila",
    size: "25 sqm display area",
    status: "Active",
  }

  const upcomingEvents = [
    {
      id: 1,
      title: "Handmade Jewelry & Crafts Fair",
      organizer: "Local Artisans Collective",
      date: "Jan 25-27, 2025",
      duration: "3 days",
      commission: "₱15,000",
    },
    {
      id: 2,
      title: "Vintage Thrift Pop-up",
      organizer: "Retro Fashion Hub",
      date: "Feb 5-7, 2025",
      duration: "3 days",
      commission: "₱12,000",
    },
  ]

  const recentBookings = [
    {
      id: 1,
      title: "Organic Food Stall Weekend",
      status: "Completed",
      date: "Jan 10-12, 2025",
      commission: "₱8,500",
    },
    {
      id: 2,
      title: "Local Artists Showcase",
      status: "Completed",
      date: "Dec 20-21, 2024",
      commission: "₱10,000",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">plook</h1>
                <p className="text-sm text-muted-foreground">Space Owner Dashboard</p>
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
          <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">Manage your space and track popup events</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Events</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                </div>
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-foreground">3</p>
                </div>
                <Users className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
                  <p className="text-2xl font-bold text-foreground">₱185,500</p>
                </div>
                <DollarSign className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Space Status</p>
                  <Badge className="bg-secondary/20 text-secondary-foreground border-secondary/30">Active</Badge>
                </div>
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Space Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Your Space</CardTitle>
                <CardDescription>Current space listing details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{spaceData.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4" />
                    {spaceData.location}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Type:</span>
                    <span className="text-sm font-medium text-foreground">{spaceData.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Size:</span>
                    <span className="text-sm font-medium text-foreground">{spaceData.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <Badge className="bg-secondary/20 text-secondary-foreground border-secondary/30">
                      {spaceData.status}
                    </Badge>
                  </div>
                </div>

                <Button className="w-full bg-transparent" variant="outline">
                  Edit Space Details
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Scheduled popup events at your space</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{event.title}</h4>
                        <Badge className="bg-primary/10 text-primary border-primary/20">Confirmed</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">by {event.organizer}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{event.date}</span>
                        <span className="font-medium text-secondary">{event.commission}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>Your completed popup events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{booking.title}</h4>
                        <Badge variant="secondary">{booking.status}</Badge>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">{booking.date}</span>
                        <span className="font-medium text-secondary">{booking.commission}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
