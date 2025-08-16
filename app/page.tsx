"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, FileText, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SignUpPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    contactPerson: "",
    email: "",
    phone: "",
    address: "",
    spaceType: "",
    spaceSize: "",
    description: "",
    amenities: "",
    documents: {
      dti: null as File | null,
      permit: null as File | null,
      bir: null as File | null,
    },
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (docType: "dti" | "permit" | "bir", file: File | null) => {
    setFormData((prev) => ({
      ...prev,
      documents: { ...prev.documents, [docType]: file },
    }))
  }

  const handleSubmit = () => {
    // Simulate form submission - in real app this would send to backend
    console.log("Form submitted:", formData)
    router.push("/login")
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">plook!</h1>
          </div>
          <p className="text-lg text-muted-foreground">Connect your space with popup events</p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {step}
              </div>
              {step < 3 && <div className={`w-16 h-1 mx-2 ${step < currentStep ? "bg-primary" : "bg-muted"}`} />}
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && "Business Information"}
              {currentStep === 2 && "Space Details"}
              {currentStep === 3 && "Legal Documents"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Tell us about your business"}
              {currentStep === 2 && "Describe your available space for popup events"}
              {currentStep === 3 && "Upload required legal documents for verification"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Business Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      placeholder="Your business name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                      placeholder="Full name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="business@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+63 XXX XXX XXXX"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Business Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="Complete business address"
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Space Details */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="spaceType">Space Type *</Label>
                    <Select value={formData.spaceType} onValueChange={(value) => handleInputChange("spaceType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select space type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail-storefront">Retail Storefront</SelectItem>
                        <SelectItem value="cafe-corner">Cafe Corner</SelectItem>
                        <SelectItem value="gallery-space">Gallery Space</SelectItem>
                        <SelectItem value="market-stall">Market Stall</SelectItem>
                        <SelectItem value="outdoor-area">Outdoor Area</SelectItem>
                        <SelectItem value="event-hall">Event Hall</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="spaceSize">Available Space Size *</Label>
                    <Input
                      id="spaceSize"
                      value={formData.spaceSize}
                      onChange={(e) => handleInputChange("spaceSize", e.target.value)}
                      placeholder="e.g., 20 sqm, 3x3 booth space"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Space Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your space - perfect for arts & crafts displays, thrift clothing racks, food stalls, etc."
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="amenities">Available Amenities</Label>
                  <Textarea
                    id="amenities"
                    value={formData.amenities}
                    onChange={(e) => handleInputChange("amenities", e.target.value)}
                    placeholder="Power outlets, display tables, storage, foot traffic, parking, etc."
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Document Upload */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-sm text-muted-foreground bg-accent/10 p-4 rounded-lg border border-accent/20">
                  <p className="font-medium mb-2 text-accent-foreground">Required Documents:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>DTI Registration or SEC Registration</li>
                    <li>Mayor's Permit / Business Permit</li>
                    <li>BIR Certificate of Registration</li>
                  </ul>
                </div>

                {/* DTI/SEC Registration */}
                <div>
                  <Label>DTI Registration or SEC Registration *</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload("dti", e.target.files?.[0] || null)}
                      className="hidden"
                      id="dti-upload"
                    />
                    <label htmlFor="dti-upload" className="cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-foreground">
                        {formData.documents.dti ? formData.documents.dti.name : "Click to upload DTI/SEC Registration"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG up to 10MB</p>
                    </label>
                  </div>
                </div>

                {/* Mayor's Permit */}
                <div>
                  <Label>Mayor's Permit / Business Permit *</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload("permit", e.target.files?.[0] || null)}
                      className="hidden"
                      id="permit-upload"
                    />
                    <label htmlFor="permit-upload" className="cursor-pointer">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-foreground">
                        {formData.documents.permit ? formData.documents.permit.name : "Click to upload Business Permit"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG up to 10MB</p>
                    </label>
                  </div>
                </div>

                {/* BIR Certificate */}
                <div>
                  <Label>BIR Certificate of Registration *</Label>
                  <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload("bir", e.target.files?.[0] || null)}
                      className="hidden"
                      id="bir-upload"
                    />
                    <label htmlFor="bir-upload" className="cursor-pointer">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-foreground">
                        {formData.documents.bir ? formData.documents.bir.name : "Click to upload BIR Certificate"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG up to 10MB</p>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button onClick={nextStep}>Next</Button>
              ) : (
                <Button onClick={handleSubmit}>Submit Application</Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          Already have an account?{" "}
          <button onClick={() => router.push("/login")} className="text-primary hover:underline">
            Sign in here
          </button>
        </div>
      </div>
    </div>
  )
}
