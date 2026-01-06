// مثال لكيفية جلب قائمة التحديات من الفايربيس باستخدام كودك
const { data: challenges, isLoading } = useCollection<ChallengeType>(challengesQuery);

return (
  <div style={challengeStack}>
    {challenges?.map((challenge) => (
      <div key={challenge.id} style={challengeItem}>
        <span>{challenge.title}</span>
        <span style={{color: '#D4AF37'}}>{challenge.points} XP</span>
      </div>
    ))}
  </div>
);
