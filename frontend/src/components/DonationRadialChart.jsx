// need to import the 

import {RadialChart} from 'react-vis';

const DonationRadialChart = (props) => {
  return (
    <RadialChart
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      margin={{top: 100}}
      getLabel={d => d.name}
      data={[
        {angle: 1, color: '#89DAC1', name: 'green'},
        {angle: 2, color: 'rgba(252, 211, 77)', name: 'yellow'},
        {angle: 3, color: '#1E96BE', name: 'cyan'},
        {angle: 4, color: '#DA70BF', name: 'magenta'},
      ]}
      labelsRadiusMultiplier={1.1}
      labelsStyle={{fontSize: 16, fill: '#222'}}
      showLabels
      style={{stroke: '#fff', strokeWidth: 2}}
      width={400}
      height={300}
    />
  );
}

export default DonationRadialChart