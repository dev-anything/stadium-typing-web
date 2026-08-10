// Loading.jsx — 공통 로딩 인디케이터 (스피너 + 텍스트)
// 다크 테마 색상 토큰 사용 (--green-primary, --orange-accent 등)

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-6 font-body text-sm text-[#9CB0A6]">
      {/* 스피너: 트랙 + 회전하는 액센트 원 */}
      <div className="relative h-8 w-8">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#3CCB6F]" />
      </div>
      <span className="font-display text-white tracking-wide">{message}</span>
    </div>
  );
};

export default Loading;
