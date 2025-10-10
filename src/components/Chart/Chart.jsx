import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ data }) => {
  const ratingsData = data?.ratings || [];

  if (!ratingsData.length) {
    return <p className="text-center py-10">No rating data available</p>;
  }

  return (
    <div className="pt-10 border-b border-b-[#00193133] h-[400px] pb-16">
      <h3 className="mb-6 md:text-2xl text-lg font-semibold text-[#001931]">Ratings</h3>

      <ResponsiveContainer className={"text-xs"}>
        <BarChart layout="vertical" data={ratingsData}>
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={30} />
          <Tooltip
            cursor={{ fill: '#f3f4f6' }}
            contentStyle={{
              borderRadius: '8px',
              fontSize: '14px',
            }}
          />
          <Bar dataKey="count" fill="#FF8811" barSize={32} />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
