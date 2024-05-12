import React, { useState } from 'react';

function GamerProfileForm() {
    const [formData, setFormData] = useState({
        averageKD: '',
        highestTier: '',
        finishes: '',
        title: '',
        totalMatches: '',
        wins: '',
        top3: '',
        mvps: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitForm = () => {
        // Convert formData to JSON
        const jsonData = JSON.stringify(formData);
        
        // Send JSON data to another page
        window.location.href = `gcvalo.html?data=${encodeURIComponent(jsonData)}`;
    };

    return (
        <div className="form-container">
            <div className="form-content">
                <h2>Gamer Profile Form</h2>
                <form>
                    <label htmlFor="averageKD">Average K/D Ratio:</label><br />
                    <input type="number" id="averageKD" name="averageKD" value={formData.averageKD} onChange={handleChange} /><br />
                    
                    <label htmlFor="highestTier">Highest Tier:</label><br />
                    <input type="text" id="highestTier" name="highestTier" value={formData.highestTier} onChange={handleChange} /><br />
                    
                    <label htmlFor="finishes">Finishes:</label><br />
                    <input type="number" id="finishes" name="finishes" value={formData.finishes} onChange={handleChange} /><br />
                    
                    <label htmlFor="title">Title:</label><br />
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} /><br />
                    
                    <label htmlFor="totalMatches">Total Matches:</label><br />
                    <input type="number" id="totalMatches" name="totalMatches" value={formData.totalMatches} onChange={handleChange} /><br />
                    
                    <label htmlFor="wins">Wins:</label><br />
                    <input type="number" id="wins" name="wins" value={formData.wins} onChange={handleChange} /><br />
                    
                    <label htmlFor="top3">Top 3:</label><br />
                    <input type="text" id="top3" name="top3" value={formData.top3} onChange={handleChange} /><br />
                    
                    <label htmlFor="mvps">MVPs:</label><br />
                    <input type="number" id="mvps" name="mvps" value={formData.mvps} onChange={handleChange} /><br />
                    
                    <button type="button" onClick={submitForm}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default GamerProfileForm;