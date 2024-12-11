import React, { useState } from "react";
import Input from "./Input";
import "../styles/Stepperform.css";
import Heading from "./Heading";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [experience, setExperience] = useState([
    {
      position: "",
      department: "",
      startDate: "",
      endDate: "",
      companyName: "",
    },
  ]);

  const [education, setEducation] = useState([
    { degree: "", field: "", startDate: "", endDate: "", institute: "" },
  ]);

  const [skills, setSkills] = useState([
    { skill: "" },  // Initial skill object with an empty string
  ]);

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };
  
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index].skill = value;
    setSkills(updatedSkills);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        position: "",
        department: "",
        startDate: "",
        endDate: "",
        companyName: "",
      },
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { degree: "", field: "", startDate: "", endDate: "", institute: "" },
    ]);
  };

  const addSkill = () => {
    setSkills([...skills, { skill: "" }]); // Adding an empty skill object
  };

  // Removing a skill entry
  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);  // Removing skill at the specified index
    setSkills(updatedSkills);
  };

  const removeExperience = (index) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    setExperience(updatedExperience);
  };

  const removeEducation = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    gender: "",
    dateOfBirth: "",
    currentPosition: "",
    currentDepartment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData,
        skills: skills.map(skill => skill.skill.trim()),
        experience,
        education,
      };
      console.log(payload);
      const userToken = localStorage.getItem("userToken");
      const response = await axios.post(
        "https://sih-backend-xengu.ondigitalocean.app/expert",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,  // Include your token here
          },
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.status === 200 || response.status === 201) {
        navigate("/dashboard");
      } else {
        console.error("Error submitting form:", response.data);
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="steppercontainer">
      <div className="flex justify-between">
        <Heading fontSize="18px" fontWeight="600">
          Personal
        </Heading>
        <Heading fontSize="18px" fontWeight="600">
          Experience
        </Heading>
        <Heading fontSize="18px" fontWeight="600">
          Education
        </Heading>
      </div>
      <div className="stepper">
        {[1, 2, 3].map((num) => (
          <React.Fragment key={num}>
            <div className={`step ${step >= num ? "active" : ""}`}>{num}</div>
            {num < 3 && (
              <div className={`step-line ${step > num ? "active" : ""}`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="steppercontent">
        {step === 1 && (
          <>
            <Heading fontSize="17px" fontWeight="500">
              Name
            </Heading>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">
              Email
            </Heading>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">
              Mobile Number
            </Heading>
            <Input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="stepperinput"
            />

            <Heading fontSize="17px" fontWeight="500">
              Gender
            </Heading>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="stepperselect"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non-Binary</option>
              <option value="other">Other</option>
            </select>

            <Heading fontSize="17px" fontWeight="500">
              Date of Birth
            </Heading>
            <Input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="stepperinput"
            />

<Heading fontSize="17px" fontWeight="500">Skills</Heading>
            {skills.map((skill, index) => (
              <div key={index} className="skill-section">
                <Input
                  type="text"
                  value={skill.skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  className="stepperinput"
                />
                <button
                  onClick={() => removeSkill(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))}
            <button onClick={addSkill} className="add-button">
              Add Another Skill
            </button>

<Heading fontSize="17px" fontWeight="500">
              Current Position
            </Heading>
            <Input
              type="text"
              name="currentPosition"
              value={formData.currentPosition}
              onChange={handleChange}
              className="stepperinput"
            />

<Heading fontSize="17px" fontWeight="500">
              Current Department
            </Heading>
            <Input
              type="text"
              name="currentDepartment"
              value={formData.currentDepartment}
              onChange={handleChange}
              className="stepperinput"
            />
          </>
        )}

        {step === 2 && (
          <div>
            {experience.map((work, index) => (
              <div key={index} className="work-experience-section">
                <Heading fontSize="17px" fontWeight="500">
                  Position
                </Heading>
                <Input
                  type="text"
                  value={work.position}
                  onChange={(e) =>
                    handleExperienceChange(index, "position", e.target.value)
                  }
                  className="stepperinput"
                />

                <Heading fontSize="17px" fontWeight="500">
                  Department
                </Heading>
                <Input
                  type="text"
                  value={work.department}
                  onChange={(e) =>
                    handleExperienceChange(index, "department", e.target.value)
                  }
                  className="stepperinput"
                />

                <Heading fontSize="17px" fontWeight="500">
                  Start Date
                </Heading>
                <Input
                  type="date"
                  value={work.startDate}
                  onChange={(e) =>
                    handleExperienceChange(index, "startDate", e.target.value)
                  }
                  className="stepperinput"
                />

                <Heading fontSize="17px" fontWeight="500">
                  End Date
                </Heading>
                <Input
                  type="date"
                  value={work.endDate}
                  onChange={(e) =>
                    handleExperienceChange(index, "endDate", e.target.value)
                  }
                  className="stepperinput"
                />

                <Heading fontSize="17px" fontWeight="500">
                  Company Name
                </Heading>
                <Input
                  type="text"
                  value={work.companyName}
                  onChange={(e) =>
                    handleExperienceChange(index, "companyName", e.target.value)
                  }
                  className="stepperinput"
                />

                <button
                  type="button"
                  onClick={() => removeExperience(index)}
                  className="remove-button"
                >
                  Remove Experience
                </button>
              </div>
            ))}

            <button onClick={addExperience} className="add-button">
              Add Another Experience
            </button>
          </div>
        )}

        {step === 3 && (
          <>
            {education.map((edu, index) => (
              <div key={index} className="education-section">
                <Heading fontSize="17px" fontWeight="500">
                  Degree
                </Heading>
                <Input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    handleEducationChange(index, "degree", e.target.value)
                  }
                  className="stepperinput"
                />

                <Heading fontSize="17px" fontWeight="500">
                  Field
                </Heading>
                <Input
                  type="text"
                  value={edu.field}
                  onChange={(e) =>
                    handleEducationChange(index, "field", e.target.value)
                  }
                  className="stepperinput"
                />

                <Heading fontSize="17px" fontWeight="500">
                  Start Date
                </Heading>
                <Input
                  type="date"
                  value={edu.startDate}
                  onChange={(e) =>
                    handleEducationChange(index, "startDate", e.target.value)
                  }
                  className="stepperinput"
                />

                <Heading fontSize="17px" fontWeight="500">
                  End Date
                </Heading>
                <Input
                  type="date"
                  value={edu.endDate}
                  onChange={(e) =>
                    handleEducationChange(index, "endDate", e.target.value)
                  }
                  className="stepperinput"
                />

                <Heading fontSize="17px" fontWeight="500">
                  Institute
                </Heading>
                <Input
                  type="text"
                  value={edu.institute}
                  onChange={(e) =>
                    handleEducationChange(index, "institute", e.target.value)
                  }
                  className="stepperinput"
                />

                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="remove-button"
                >
                  Remove Education
                </button>
              </div>
            ))}

            <button onClick={addEducation} className="add-button">
              Add Another Education
            </button>
          </>
        )}
      </div>

      <div className="stepperbuttons">
        <button
          onClick={prevStep}
          className="stepperbutton previous"
          disabled={step === 1}
        >
          Previous
        </button>
        <Button
          onClick={step === 3 ? handleSubmit : nextStep}
          bgcolor="var(--bg-color2)"
          color="white"
          fontSize="18px"
          padding="8px 18px"
          borderRadius="8px"
        >
          {step === 3 ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default StepperForm;
