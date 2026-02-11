export default function TeamSection() {
    const team = [
    {
      image: "https://via.placeholder.com/150", // Replace with real photos later
      name: "User 1",
      role: "CEO",
      description: "Description for the CEO."
    },
    {
      image: "https://via.placeholder.com/150", // Replace with real photos later
      name: "User 2",
      role: "COO",
      description: "Description for the COO."
    },
    {
      image: "https://via.placeholder.com/150", // Replace with real photos later
      name: "User 3",
      role: "Programming",
      description: "Description for the programmer."
    },
    {
      image: "https://via.placeholder.com/150", // Replace with real photos later
      name: "User 4",
      role: "Designer",
      description: "Description for the designer."
    },
  ];

  return (
    <div className="w-full max-w-4xl mt-16 px-4">
      <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">فريق العمل</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-50 shadow-md"
            />
            <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
            <span className="text-blue-600 text-sm font-semibold mb-3">{member.role}</span>
            <p className="text-gray-500 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}