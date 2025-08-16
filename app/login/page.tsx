"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Store, Calendar } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("space-owner")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleLogin = (userType: string) => {
    // Simulate login - in real app this would authenticate with backend
    console.log("Login attempt:", { userType, ...formData })

    // Redirect based on user type
    if (userType === "space-owner") {
      router.push("/dashboard/space-owner")
    } else {
      router.push("/dashboard/event-organizer")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">plook</h1>
          </div>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Choose your account type and sign in</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="space-owner" className="flex items-center gap-2">
                  <Store className="h-4 w-4" />
                  Host
                </TabsTrigger>
                <TabsTrigger value="event-organizer" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Occupant
                </TabsTrigger>
              </TabsList>

              <TabsContent value="space-owner" className="space-y-4 mt-6">
                <div className="text-sm text-muted-foreground bg-accent/10 p-3 rounded-lg border border-accent/20">
                  <p className="font-medium text-accent-foreground">Host Account</p>
                  <p>Manage your space listings and popup event bookings</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="space-email">Email Address</Label>
                    <Input
                      id="space-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="space-password">Password</Label>
                    <Input
                      id="space-password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>
                  <Button className="w-full" onClick={() => handleLogin("space-owner")}>
                    Sign In as Host
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="event-organizer" className="space-y-4 mt-6">
                <div className="text-sm text-muted-foreground bg-secondary/10 p-3 rounded-lg border border-secondary/20">
                  <p className="font-medium text-secondary-foreground">Occupant Account</p>
                  <p>Browse spaces and book popup events for arts & crafts, thrift sales, food stalls</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="organizer-email">Email Address</Label>
                    <Input
                      id="organizer-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="organizer-password">Password</Label>
                    <Input
                      id="organizer-password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      placeholder="Enter your password"
                    />
                  </div>
                  <Button className="w-full" onClick={() => handleLogin("event-organizer")}>
                    Sign In as Occupant
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <button onClick={() => router.push("/")} className="text-primary hover:underline">
                  Register your space
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
