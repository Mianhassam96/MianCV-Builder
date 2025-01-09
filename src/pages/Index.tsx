import React, { useState } from "react";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { Button } from "@/components/ui/button";
import { Download, Share2, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import html2pdf from "html2pdf.js";

const Index = () => {
  const [formData, setFormData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState<"modern" | "professional" | "creative">("modern");
  const { toast } = useToast();

  const handleExport = async () => {
    const element = document.getElementById('resume-preview');
    if (!element) {
      toast({
        title: "Error",
        description: "Preview element not found",
        variant: "destructive",
      });
      return;
    }

    const opt = {
      margin: 0.5,
      filename: 'MianCV-resume.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: true
      },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    try {
      await html2pdf().from(element).set(opt).save();
      toast({
        title: "Success!",
        description: "Your resume has been downloaded successfully.",
      });
    } catch (error) {
      console.error('PDF generation error:', error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Resume',
          text: 'Check out my resume created with MianCV Builder',
          url: window.location.href
        });
        toast({
          title: "Shared!",
          description: "Your resume has been shared successfully.",
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to share resume.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">MianCV Builder</h1>
          <p className="mt-2 text-gray-200 text-center">Create your professional resume in minutes</p>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
          <Select 
            value={selectedTemplate} 
            onValueChange={(value: "modern" | "professional" | "creative") => setSelectedTemplate(value)}
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern Template</SelectItem>
              <SelectItem value="professional">Professional Template</SelectItem>
              <SelectItem value="creative">Creative Template</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex gap-4">
            <Button onClick={handleShare} variant="outline" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button onClick={handleExport} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ResumeForm formData={formData} setFormData={setFormData} />
          </div>
          <div className="lg:sticky lg:top-8 h-fit">
            <div id="resume-preview">
              <ResumePreview formData={formData} template={selectedTemplate} />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 mt-8">
        <div className="container text-center">
          <p className="text-lg font-semibold">MianCV Builder</p>
          <p className="text-sm mt-2">© 2025 All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-blue-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;