import React, { useState } from "react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({});
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Coming Soon!",
      description: "PDF export functionality will be available in the next update.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-6">
        <div className="container">
          <h1 className="text-3xl font-bold">Resume Builder</h1>
          <p className="mt-2 text-gray-200">Create your professional resume in minutes</p>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex justify-end mb-6">
          <Button onClick={handleExport} className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export PDF
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ResumeForm formData={formData} setFormData={setFormData} />
          </div>
          <div className="lg:sticky lg:top-8 h-fit">
            <ResumePreview formData={formData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;