import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { PlusCircle, Trash2, GraduationCap, Award } from "lucide-react";

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

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...(formData.education || []),
        { institution: "", degree: "", year: "", gpa: "" },
      ],
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...(formData.skills || []), { name: "", level: "Beginner" }],
    });
  };

  const removeExperience = (index: number) => {
    const newExperience = [...(formData.experience || [])];
    newExperience.splice(index, 1);
    setFormData({ ...formData, experience: newExperience });
  };

  const removeEducation = (index: number) => {
    const newEducation = [...(formData.education || [])];
    newEducation.splice(index, 1);
    setFormData({ ...formData, education: newEducation });
  };

  const removeSkill = (index: number) => {
    const newSkills = [...(formData.skills || [])];
    newSkills.splice(index, 1);
    setFormData({ ...formData, skills: newSkills });
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
          <Input
            placeholder="LinkedIn Profile"
            name="linkedin"
            value={formData.linkedin || ""}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Portfolio Website"
            name="website"
            value={formData.website || ""}
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
                value={exp.company}
                onChange={(e) => {
                  const newExperience = [...(formData.experience || [])];
                  newExperience[index] = { ...exp, company: e.target.value };
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
              <Input
                placeholder="Position"
                value={exp.position}
                onChange={(e) => {
                  const newExperience = [...(formData.experience || [])];
                  newExperience[index] = { ...exp, position: e.target.value };
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
              <Input
                placeholder="Duration (e.g., 2020 - Present)"
                value={exp.duration}
                onChange={(e) => {
                  const newExperience = [...(formData.experience || [])];
                  newExperience[index] = { ...exp, duration: e.target.value };
                  setFormData({ ...formData, experience: newExperience });
                }}
              />
              <Textarea
                placeholder="Job Description"
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

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">Education</h2>
          <Button onClick={addEducation} variant="outline" className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Add Education
          </Button>
        </div>
        
        {(formData.education || []).map((edu: any, index: number) => (
          <Card key={index} className="p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Education {index + 1}</h3>
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive"
                onClick={() => removeEducation(index)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) => {
                  const newEducation = [...(formData.education || [])];
                  newEducation[index] = { ...edu, institution: e.target.value };
                  setFormData({ ...formData, education: newEducation });
                }}
              />
              <Input
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => {
                  const newEducation = [...(formData.education || [])];
                  newEducation[index] = { ...edu, degree: e.target.value };
                  setFormData({ ...formData, education: newEducation });
                }}
              />
              <Input
                placeholder="Year"
                value={edu.year}
                onChange={(e) => {
                  const newEducation = [...(formData.education || [])];
                  newEducation[index] = { ...edu, year: e.target.value };
                  setFormData({ ...formData, education: newEducation });
                }}
              />
              <Input
                placeholder="GPA (optional)"
                value={edu.gpa}
                onChange={(e) => {
                  const newEducation = [...(formData.education || [])];
                  newEducation[index] = { ...edu, gpa: e.target.value };
                  setFormData({ ...formData, education: newEducation });
                }}
              />
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary">Skills</h2>
          <Button onClick={addSkill} variant="outline" className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            Add Skill
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(formData.skills || []).map((skill: any, index: number) => (
            <Card key={index} className="p-4">
              <div className="flex items-center gap-4">
                <Input
                  placeholder="Skill name"
                  value={skill.name}
                  onChange={(e) => {
                    const newSkills = [...(formData.skills || [])];
                    newSkills[index] = { ...skill, name: e.target.value };
                    setFormData({ ...formData, skills: newSkills });
                  }}
                  className="flex-1"
                />
                <select
                  value={skill.level}
                  onChange={(e) => {
                    const newSkills = [...(formData.skills || [])];
                    newSkills[index] = { ...skill, level: e.target.value };
                    setFormData({ ...formData, skills: newSkills });
                  }}
                  className="border rounded p-2"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Expert</option>
                </select>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-destructive"
                  onClick={() => removeSkill(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;