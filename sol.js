function getStatusFrequency(applications) {
    const frequency = {};
    for (const application of applications) {
      const status = application.status;
      frequency[status] = (frequency[status] || 0) + 1;
    }
    return frequency;
  }
  // this is the commit i added to check 
  

  // Example usage:
  const applications = [
    { status: "Applied" },
    { status: "Interview" },
    { status: "Offer" },
    { status: "Rejected" },
    { status: "Applied" },
    { status: "Interview" },
    { status: "Rejected" },
    { status: "Applied" },
    { status: "Rejected" },
    { status: "Applied" }
  ];
  
  console.log(getStatusFrequency(applications));
  