import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { PlusCircle, Trash2 } from "lucide-react";

interface ResumeFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ formData, setFormData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...(formData.experience || []),
        { company: "", position: "", duration: "", description: "" },
      ],
    });
  };

  const removeExperience = (index: number) => {
    const newExperience = [...(formData.experience || [])];
    newExperience.splice(index, 1);
    setFormData({ ...formData, experience: newExperience });
  };

  return (
    <div className="space-y-6 p-6 animate-fadeIn">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName || ""}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="email"
            value={formData.email || ""}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Phone"
            name="phone"
            value={formData.phone || ""}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Location"
            name="location"
            value={formData.location || ""}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">Professional Summary</h2>
        <Textarea
          placeholder="Write a brief summary of your professional background..."
          name="summary"
          value={formData.summary || ""}
          onChange={handleInputChange}
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">Work Experience</h2>
          <Button onClick={addExperience} variant="outline" className="flex items-center gap-2">
            <PlusCircle className="w-4 h-4" />
            Add Experience
          </Button>
        </div>
        
        {(formData.experience || []).map((exp: any, index: number) => (
          <Card key={index} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Experience {index + 1}</h3>
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive"
                onClick={() => removeExperience(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Company"
                name={`experience.${index}.company`}
                value={exp.company}
                onChange={(e) => {
                  const newExperience = [...(formData.experience || [])];
                  newExperience[index] = { ...exp, company: e.target.value };
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
              <Input
                placeholder="Position"
                name={`experience.${index}.position`}
                value={exp.position}
                onChange={(e) => {
                  const newExperience = [...(formData.experience || [])];
                  newExperience[index] = { ...exp, position: e.target.value };
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
              <Input
                placeholder="Duration (e.g., 2020 - Present)"
                name={`experience.${index}.duration`}
                value={exp.duration}
                onChange={(e) => {
                  const newExperience = [...(formData.experience || [])];
                  newExperience[index] = { ...exp, duration: e.target.value };
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
              <Textarea
                placeholder="Job Description"
                name={`experience.${index}.description`}
                value={exp.description}
                onChange={(e) => {
                  const newExperience = [...(formData.experience || [])];
                  newExperience[index] = { ...exp, description: e.target.value };
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResumeForm;