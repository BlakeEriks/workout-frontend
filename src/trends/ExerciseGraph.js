import React from 'react';
import moment from 'moment';

import { CartesianGrid, Legend, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from 'recharts';

const ExerciseGraph = props => (
    
    <ResponsiveContainer width = '95%' height = {380} >
        <ScatterChart>
            <XAxis
                dataKey = 'date'
                domain = {['auto', 'auto']}
                name = 'Time'
                tickFormatter = {(date) => moment(date).format('D MMM')}
            />
            <YAxis 
                dataKey = 'volume' name = 'Volume' />
    
            <Scatter
                data = {props.exercises}
                line = {{ stroke: '#eee' }}
                lineJointType = 'monotoneX'
                lineType = 'joint'
                name = 'Values'
            />
            
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />  
  
      </ScatterChart>
    </ResponsiveContainer>
)

export default ExerciseGraph;