import styled from 'styled-components'
const Seasons = ({seasons}) => {
  return (
    <SeasonsWrapper>
      <p>Seasons in total: {seasons.length}</p>
      <p>Episodes in total: { !!seasons.episodeOrder?seasons.reduce((i,j)=>i+j.episodeOrder,0):'N/A'}</p> 
      <SeasonList>{
        seasons.map((i)=>(
              <div key={i.id} className='season-item'>
                <div className='left'>
                  <p>Season: {i.number}</p>
                  <p>Episodes: {i.episodeOrder}</p>
                </div>
                <div className='right'>
                    Aired: <strong>{!!i.premiereDate && !!i.endDate ?'N/A':i.premiereDate - i.endDate}</strong>
                </div>
              </div>          
        ))
      }</SeasonList>    
    </SeasonsWrapper>
  )
}

export default Seasons

const SeasonsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;

const SeasonList = styled.div`
  display: flex;
  flex-direction: column;
  .season-item {
    display: flex;
    align-items: center;
    margin: 10px 0;
    &:last-child {
      margin-bottom: 0;
    }
    .left {
      flex: 0 0 30%;
      border-right: 1px solid #b0b0b0;
      padding-right: 20px;
    }
    .right {
      padding-left: 20px;
      flex: 1;
    }
  }
`;