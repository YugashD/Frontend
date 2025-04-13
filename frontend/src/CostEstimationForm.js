import React, { useState } from 'react';
import './CostEstimationForm.css';

export default function CostEstimationForm() {
  const [formData, setFormData] = useState({
    dedicated_team_members: '',
    team_size: '',
    actual_duration: '',
    object_points: '',
    risk_management: '',
    economic_instability_impact: '',
    development_type: '',
    sizing_method: '',
    application_domain: '',
    top_management_opinion: '',
    environment_adequacy: '',
    num_languages: '',
    user_resistance: '',
    reliability_requirements: '',
    income_satisfaction: '',
    schedule_quality: '',
    tool_experience: '',
    code_comments: '',
    org_structure_clarity: '',
    team_cohesion: '',
    hourly_rate: '',
    coli: '',
    complexity_level: '',
    team_multiplier: '',
    tech_multiplier: '',
    overhead_cost: '',
    additional_cost: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/estimate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log("Server response:", result);

    if (result.error) {
      alert(`Error: ${result.error}`);
    } else {
      alert(`Predicted Effort: ${result.predicted_effort} hours\nTotal Estimated Cost: $${result.total_project_cost}`);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Software Cost Estimation</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <label>Dedicated Team Members
          <select name="dedicated_team_members" onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="0">None</option>
            <option value="1">Some</option>
            <option value="2">Half</option>
            <option value="3">Most</option>
            <option value="4">Almost All</option>
            <option value="5">All</option>
          </select>
        </label>

        <label>Team Size
          <input type="number" name="team_size" onChange={handleChange} required />
        </label>

        <label>Actual Duration (months)
          <input type="number" name="actual_duration" onChange={handleChange} required />
        </label>

        <label>Object Points
          <input type="number" name="object_points" onChange={handleChange} required />
        </label>

        <label>Risk Management
          <select name="risk_management" onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </label>

        <label>Economic Instability
          <select name="economic_instability_impact" onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </label>

        <label>Development Type
          <select name="development_type" onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="1">New</option>
            <option value="2">Rebuild</option>
            <option value="3">Enhancement</option>
          </select>
        </label>

        <label>Sizing Method
          <select name="sizing_method" onChange={handleChange} required>
            <option value="1">Function Points</option>
            <option value="2">Lines of Code</option>
            <option value="3">Use Case Points</option>
          </select>
        </label>

        <label>Application Domain
          <select name="application_domain" onChange={handleChange} required>
            <option value="1">Finance</option>
            <option value="2">Healthcare</option>
            <option value="3">E-commerce</option>
          </select>
        </label>

        <label>Top Management Opinion
          <select name="top_management_opinion" onChange={handleChange} required>
            <option value="1">Negative</option>
            <option value="2">Neutral</option>
            <option value="3">Positive</option>
          </select>
        </label>

        <label>Environment Adequacy
          <select name="environment_adequacy" onChange={handleChange} required>
            <option value="1">Inadequate</option>
            <option value="2">Adequate</option>
          </select>
        </label>

        <label>Number of Languages
          <input type="number" name="num_languages" onChange={handleChange} required />
        </label>

        <label>User Resistance
          <select name="user_resistance" onChange={handleChange} required>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </label>

        <label>Reliability Requirements
          <select name="reliability_requirements" onChange={handleChange} required>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </label>

        <label>Income Satisfaction
          <select name="income_satisfaction" onChange={handleChange} required>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Schedule Quality
          <select name="schedule_quality" onChange={handleChange} required>
            <option value="1">On Time</option>
            <option value="2">Delayed</option>
          </select>
        </label>

        <label>Tool Experience
          <select name="tool_experience" onChange={handleChange} required>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </label>

        <label>Code Comments
          <select name="code_comments" onChange={handleChange} required>
            <option value="1">Few</option>
            <option value="2">Moderate</option>
            <option value="3">Many</option>
          </select>
        </label>

        <label>Org Structure Clarity
          <select name="org_structure_clarity" onChange={handleChange} required>
            <option value="1">Unclear</option>
            <option value="2">Clear</option>
          </select>
        </label>

        <label>Team Cohesion
          <select name="team_cohesion" onChange={handleChange} required>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
        </label>

        <label>Hourly Rate ($/hr)
          <input type="number" name="hourly_rate" onChange={handleChange} required />
        </label>

        <label>Cost of Living Index (COLI)
          <input type="number" name="coli" onChange={handleChange} required />
        </label>

        <label>Complexity Level
          <select name="complexity_level" onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>

        <label>Team Multiplier
          <input type="number" name="team_multiplier" onChange={handleChange} required />
        </label>

        <label>Tech Multiplier
          <input type="number" name="tech_multiplier" onChange={handleChange} required />
        </label>

        <label>Overhead Cost
          <input type="number" name="overhead_cost" onChange={handleChange} required />
        </label>

        <label>Additional Cost
          <input type="number" name="additional_cost" onChange={handleChange} required />
        </label>

        <div className="col-span-2 mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Estimate Cost</button>
        </div>
      </form>
    </div>
  );
}
