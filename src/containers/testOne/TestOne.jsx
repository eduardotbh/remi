import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './testOne.css';
import AdvisorCard from '../../components/advisorCard/AdvisorCard';
import ProfilePic1 from '../../assets/ProfilePic1.png';
import ProfilePic2 from '../../assets/ProfilePic2.png';
import ProfilePic3 from '../../assets/ProfilePic3.png';
import ProfilePic4 from '../../assets/ProfilePic4.png';
import ProfilePic5 from '../../assets/ProfilePic5.png';
import ProfilePic6 from '../../assets/ProfilePic6.png';
import ProfilePic7 from '../../assets/ProfilePic7.png';
import ProfilePic8 from '../../assets/ProfilePic8.png';
import ProfilePic9 from '../../assets/ProfilePic9.png';

const QuizPartOne = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="oko_test-content">
          <h2>Personality</h2>
        </div>
          <div className="oko_test-content">
          <h3>1. You regularly make new friends/contacts.</h3>
            <label className="oko_test-option"><input type="radio" name="q1" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q1" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q1" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q1" value="4" /> Disagree </label>
          </div>
          <div className="oko_test-content">
            <h3>2. Your living and working spaces are clean and organized.</h3>
            <label className="oko_test-option"><input type="radio" name="q2" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q2" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q2" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q2" value="4" /> Desagree </label>
          </div>
          <div className="oko_test-content">
            <h3>3. You usually stay calm, even under a lot of pressure.</h3>
            <label className="oko_test-option"><input type="radio" name="q3" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q3" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q3" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q3" value="4" /> Desagree </label>
          </div>
          <div className="oko_test-content">
            <h3>4. You retgularly make new friends/contacts.</h3>
            <label className="oko_test-option"><input type="radio" name="q4" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q4" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q4" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q4" value="4" /> Desagree </label>
          </div>
          <div className="oko_test-content">
            <h3>5. You find the idea of networking or promoting yourself to strangers very daunting.</h3>
            <label className="oko_test-option"><input type="radio" name="q5" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q5" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q5" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q5" value="4" /> Desagree </label>
          </div>
          <div className="oko_test-content">
            <h3>6. You prioritize and plan tasks effectively, often completing them well before the deadline.</h3>
            <label className="oko_test-option"><input type="radio" name="q6" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q6" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q6" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q6" value="4" /> Desagree </label>
          </div>
          <div className="oko_test-content">
            <h3>7. You like to use organizing tools like schedules and lists.</h3>
            <label className="oko_test-option"><input type="radio" name="q7" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q7" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q7" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q7" value="4" /> Desagree </label>
          </div>
          <div className="oko_test-content">
            <h3>8. Even a small mistake can cause you to doubt you overall abilities and knowledge.</h3>
            <label className="oko_test-option"><input type="radio" name="q8" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q8" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q8" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q8" value="4" /> Desagree </label>
          </div>
          <div className="oko_test-content">
            <h3>9. You enjoy participating in team-based activities.</h3>
            <label className="oko_test-option"><input type="radio" name="q9" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q9" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q9" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q9" value="4" /> Desagree </label>
          </div>
          <div className="oko_test-content">
            <h3>10. You enjoy solitary hobbies or activities more than groups ones.</h3>
            <label className="oko_test-option"><input type="radio" name="q10" value="1" /> Agree </label>
            <label className="oko_test-option"><input type="radio" name="q10" value="2" /> Very often</label>
            <label className="oko_test-option"><input type="radio" name="q10" value="3" /> Not often </label>
            <label className="oko_test-option"><input type="radio" name="q10" value="4" /> Desagree </label>
          </div>
        {/* Other questions for Part One */}
        <div className="oko_test-btn">
          <button type="submit">Next</button>
        </div>
      </div>
    </form>
  );
};

const QuizPartTwo = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="oko_test-content">
        <h2>Business</h2>
        <div>
          <h3>1. Please select the industry of your business.</h3>
          <select name="q1" className="oko_test-option">
            <option value="1">Technology</option>
            <option value="2">Restaurant</option>
            <option value="3">Health Care</option>
            <option value="4">Accounting</option>
            <option value="5">Retail</option>
            <option value="6">Construction</option>
            <option value="7">Education</option>
            <option value="8">Other</option>
          </select>
        </div>
        {/* Other questions for Part Two */}
        <div className="oko_test-btn">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

const advisors = [
  { id: 1, name: 'David Witchie', minScore: 19, maxScore: 25, photo: ProfilePic1, description: 'Advisor 1 description' },
  { id: 2, name: 'David Witchie', minScore: 26, maxScore: 30, photo: ProfilePic2, description: 'Advisor 2 description' },
  { id: 3, name: 'Andrea Molina', minScore: 31, maxScore: 35, photo: ProfilePic3, description: 'Advisor 3 description' },
  { id: 4, name: 'Julieta Santos', minScore: 36, maxScore: 40, photo: ProfilePic4, description: 'Advisor 4 description' },
  { id: 5, name: 'Sandra Gonzalez', minScore: 41, maxScore: 45, photo: ProfilePic5, description: 'Advisor 5 description' },
  { id: 6, name: 'Advisor 6', minScore: 46, maxScore: 50, photo: ProfilePic6, description: 'Advisor 6 description' },
  { id: 7, name: 'Advisor 7', minScore: 51, maxScore: 55, photo: ProfilePic7, description: 'Advisor 7 description' },
  { id: 8, name: 'Advisor 8', minScore: 56, maxScore: 60, photo: ProfilePic8, description: 'Advisor 8 description' },
  { id: 9, name: 'Advisor 9', minScore: 61, maxScore: 65, photo: ProfilePic9, description: 'Advisor 9 description' },
];

const findAdvisors = (score) => {
  const matchedAdvisorIndex = advisors.findIndex(advisor => score >= advisor.minScore && score <= advisor.maxScore);
  if (matchedAdvisorIndex === -1) return [];
  const previousAdvisor = advisors[matchedAdvisorIndex - 1] || null;
  const matchedAdvisor = advisors[matchedAdvisorIndex];
  const nextAdvisor = advisors[matchedAdvisorIndex + 1] || null;
  return [previousAdvisor, matchedAdvisor, nextAdvisor].filter(Boolean);
};

const TestOne = () => {
  const navigate = useNavigate();
  const [showTest, setShowTest] = useState(false);
  const [currentPart, setCurrentPart] = useState(1);
  const [score, setScore] = useState(0);
  const [isTestComplete, setIsTestComplete] = useState(false);
  const [matchedAdvisors, setMatchedAdvisors] = useState([]);
  const [selectedAdvisor, setSelectedAdvisor] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let partScore = 0;
    for (let value of formData.values()) {
      partScore += parseInt(value, 10);
    }
    setScore(prevScore => {
      const newScore = prevScore + partScore;
      if (currentPart === 1) {
        setCurrentPart(2);
      } else {
        const advisors = findAdvisors(newScore);
        setMatchedAdvisors(advisors);
        setIsTestComplete(true);
      }
      return newScore;
    });
  };

  const startTest = () => setShowTest(true);
  const handleAdvisorSelect = (advisor) => setSelectedAdvisor(advisor);

  if (selectedAdvisor) {
    return (
      <div className="oko_test">
        <div className="oko_test-content">
          <h3>Thank you for selecting your advisor!</h3>
          <p>Soon {selectedAdvisor.name} will contact you to schedule your first meeting.</p>
          <div className="advisor-card">
            <img className="advisor-photo" src={selectedAdvisor.photo} alt={selectedAdvisor.name} />
            <h3>{selectedAdvisor.name}</h3>
            <p>{selectedAdvisor.description}</p>
          </div>
          <div className="oko_test-btn">
            <button onClick={() => navigate('/dashboard', { state: { advisor: selectedAdvisor } })}>Go to Oko</button>
          </div>
        </div>
      </div>
    );
  }

  if (isTestComplete) {
    return (
      <div className="oko_test">
        <div className="oko_test-content">
          <h3>Your total score is: {score}</h3>
          {matchedAdvisors.length > 0 ? (
            <>
              <p>Your matched advisors are:</p>
              <div className="advisor-cards">
                {matchedAdvisors.map(advisor => (
                  <AdvisorCard key={advisor.id} advisor={advisor} onSelect={handleAdvisorSelect} />
                ))}
              </div>
            </>
          ) : (
            <p>No advisors matched your score.</p>
          )}
        </div>
      </div>
    );
  }

  if (showTest) {
    return (
      <div className="oko_test">
        {currentPart === 1 ? <QuizPartOne onSubmit={handleSubmit} /> : <QuizPartTwo onSubmit={handleSubmit} />}
      </div>
    );
  }

  return (
    <div className="oko_test">
      <div className="oko_test-content">
        <h3>Welcome Eduardo, We are going to do a quick test to match your advisor!</h3>
        <p>This will take 15 minutes, we'll get to know both, your personality and your business.</p>
      </div>
      <div className="oko_test-btn">
        <button type="button" onClick={startTest}>Get Started</button>
      </div>
    </div>
  );
};

export default TestOne;
