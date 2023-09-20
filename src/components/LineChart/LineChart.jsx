import { LineChart as LChart, Line, Tooltip, XAxis, YAxis} from 'recharts';

// here import variable and function name same so we can set new name (like as then variable name)
const LineChart = () => {
    const subjectMarksData = [
        {
          id: 1,
          name: "John Doe",
          math: 95,
          physics: 88,
          chemistry: 76,
        },
        {
          id: 2,
          name: "Jane Smith",
          math: 88,
          physics: 92,
          chemistry: 78,
        },
        {
          id: 3,
          name: "Mike Johnson",
          math: 75,
          physics: 85,
          chemistry: 90,
        },
        {
          id: 4,
          name: "Emily Davis",
          math: 92,
          physics: 78,
          chemistry: 85,
        },
        {
          id: 5,
          name: "David Wilson",
          math: 80,
          physics: 90,
          chemistry: 92,
        },
        {
          id: 6,
          name: "Sarah Brown",
          math: 89,
          physics: 95,
          chemistry: 88,
        },
        {
          id: 7,
          name: "Daniel Lee",
          math: 78,
          physics: 82,
          chemistry: 76,
        },
        {
          id: 8,
          name: "Olivia Anderson",
          math: 86,
          physics: 88,
          chemistry: 84,
        },
        {
          id: 9,
          name: "Ella Martinez",
          math: 94,
          physics: 96,
          chemistry: 91,
        },
        {
          id: 10,
          name: "Liam Garcia",
          math: 97,
          physics: 87,
          chemistry: 89,
        },
      ];
    return (
        <div className='my-20'>
          <h2 className='text-4xl font-bold text-pink-800 mb-10'>Line Chart:</h2>
            <LChart width={800} height={400} data={subjectMarksData}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;