"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, ExternalLink, Sparkles, Award } from "lucide-react"

interface AchievementCardProps {
    title: string
    description: string
    badges: string[]
    impact: string
    link: string
}

export function AchievementCard({ title, description, badges, impact, link }: AchievementCardProps) {
    return (
        <div className="group relative">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

            <Card className="relative  inset-0 bg-gradient-to-br from-[#FFD700] via-yellow-400 to-amber-400  border-0 rounded-2xl overflow-hidden transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600"></div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 text-black transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <div className="relative">
                        <Trophy size={28} className="drop-shadow-lg" />
                        <Sparkles size={12} className="absolute -top-1 -right-1 text-black animate-pulse" />
                    </div>
                </div>

                <CardContent className="p-8 relative z-10">
                    {/* Header section */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 backdrop-blur-sm">
                                <Award size={14} className="text-black" />
                                <span className="text-xs font-semibold text-black tracking-wide">TEAM CONTRIBUTION</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold bg-gradient-to-r from-black via-black/50 to-black/50 bg-clip-text text-transparent leading-tight mb-3">
                            {title}
                        </h3>

                        <p className="text-black leading-relaxed text-base">{description}</p>
                    </div>

                    {/* Impact section - the star of the show */}
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl blur-sm"></div>
                        <div className="relative bg-gradient-to-br bg-rose-100 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Key Achievement</span>
                            </div>
                            <p className="text-xl font-bold bg-gradient-to-r bg-gray-700 bg-clip-text text-transparent">
                                <ul>

                                {impact.split(',').map((impact, index) => (
                                    <li key={impact} className="list-disc list-inside">
                                        {impact}
                                        {/*{index !== impact.length - 1 && <span>,</span>}*/}
                                    </li>
                                ))}
                                </ul>
                            </p>
                        </div>
                    </div>

                    {/* Skills badges */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {badges.map((badge, index) => (
                                <Badge
                                    key={badge}
                                    className="bg-rose-700/50 hover:bg-rose-600/50 text-gray-200 border-rose-600/50 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Action link */}
                    <div className="pt-4 border-t border-slate-700/50">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group/link"
                        >
                            <span>View Industry Solution</span>
                            <ExternalLink
                                size={16}
                                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                        </a>
                    </div>
                </CardContent>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
            </Card>
        </div>
    )
}
// "use client"
//
// import { Trophy, Users, Calendar, Star, Award, ExternalLink } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
//
// export default function Component() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-4">
//       <Card className="w-full max-w-2xl h-80 relative overflow-hidden bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-300 border-4 border-yellow-500 shadow-2xl animate-pulse">
//         {/* Dynamic gold base with enhanced lighting */}
//         <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-400 animate-pulse"></div>
//
//         {/* Multiple lightning effects */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent transform -rotate-12 animate-ping"></div>
//         <div className="absolute inset-0 bg-gradient-to-l from-transparent via-yellow-100/50 to-transparent transform rotate-12 animate-pulse"></div>
//         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent animate-pulse"></div>
//         <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-600/30 to-transparent"></div>
//
//         {/* Animated corner lightning bolts */}
//         <div className="absolute top-2 left-2 w-12 h-12 border-l-4 border-t-4 border-white/60 animate-bounce"></div>
//         <div className="absolute top-2 right-2 w-12 h-12 border-r-4 border-t-4 border-white/60 animate-bounce delay-100"></div>
//         <div className="absolute bottom-2 left-2 w-12 h-12 border-l-4 border-b-4 border-white/60 animate-bounce delay-200"></div>
//         <div className="absolute bottom-2 right-2 w-12 h-12 border-r-4 border-b-4 border-white/60 animate-bounce delay-300"></div>
//
//         {/* Floating sparkles */}
//         <div className="absolute top-8 left-16 w-2 h-2 bg-white rounded-full animate-ping"></div>
//         <div className="absolute top-16 right-20 w-3 h-3 bg-yellow-100 rounded-full animate-pulse delay-500"></div>
//         <div className="absolute bottom-12 left-24 w-2 h-2 bg-white rounded-full animate-ping delay-700"></div>
//
//         <CardContent className="p-8 relative z-10 h-full flex items-center">
//           <div className="flex items-center justify-between w-full gap-8">
//             {/* Left side - Trophy and title */}
//             <div className="flex-1">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white/80 to-yellow-200 rounded-full shadow-inner border-2 border-yellow-600 animate-spin-slow">
//                   <Trophy className="w-8 h-8 text-yellow-800 drop-shadow-sm animate-bounce" />
//                 </div>
//                 <div>
//                   <h1
//                     className="text-3xl font-bold text-black drop-shadow-lg animate-pulse"
//                     style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
//                   >
//                     ACHIEVEMENT UNLOCKED
//                   </h1>
//                   <div className="w-24 h-1 bg-yellow-800 rounded-full shadow-inner animate-pulse"></div>
//                 </div>
//               </div>
//
//               <div className="mb-6">
//                 <div className="flex items-center gap-3 mb-3">
//                   <Users className="w-6 h-6 text-yellow-900 drop-shadow-sm animate-pulse" />
//                   <h2
//                     className="text-xl font-bold text-black drop-shadow-lg"
//                     style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.4)" }}
//                   >
//                     SAAS COLLABORATION MASTER
//                   </h2>
//                 </div>
//                 <p
//                   className="text-black/90 text-sm leading-relaxed max-w-md font-medium"
//                   style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
//                 >
//                   Successfully collaborated on a SaaS platform for one full year, contributing to its remarkable success
//                   and growth
//                 </p>
//               </div>
//
//               <div className="flex justify-center space-x-1 mb-3">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className="w-5 h-5 text-yellow-900 fill-yellow-900 drop-shadow-sm animate-pulse"
//                     style={{ animationDelay: `${i * 200}ms` }}
//                   />
//                 ))}
//               </div>
//               <p
//                 className="text-black font-bold text-sm text-center animate-pulse"
//                 style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
//               >
//                 EXCEPTIONAL TEAMWORK & DEDICATION
//               </p>
//
//               {/* SaaS Link Button */}
//               <div className="mt-4 text-center">
//                 <Button
//                   className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-pulse"
//                   onClick={() => window.open("https://your-saas-platform.com", "_blank")}
//                 >
//                   <ExternalLink className="w-4 h-4 mr-2" />
//                   Visit SaaS Platform
//                 </Button>
//               </div>
//             </div>
//
//             {/* Right side - Stats */}
//             <div className="flex flex-col items-center gap-6">
//               <div className="text-center animate-float">
//                 <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white/80 to-yellow-200 rounded-full mb-3 shadow-inner border-2 border-yellow-600 animate-spin-slow">
//                   <Calendar className="w-10 h-10 text-yellow-900 drop-shadow-sm" />
//                 </div>
//                 <div
//                   className="text-black font-black text-4xl drop-shadow-lg animate-pulse"
//                   style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
//                 >
//                   365
//                 </div>
//                 <div className="text-black/90 text-sm font-bold" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
//                   DAYS OF SUCCESS
//                 </div>
//               </div>
//
//               <div className="text-center animate-float delay-300">
//                 <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white/80 to-yellow-200 rounded-full mb-3 shadow-inner border-2 border-yellow-600 animate-spin-slow">
//                   <Award className="w-10 h-10 text-yellow-900 drop-shadow-sm" />
//                 </div>
//                 <div
//                   className="text-black font-black text-2xl drop-shadow-lg animate-pulse"
//                   style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
//                 >
//                   GOLD LEVEL
//                 </div>
//                 <div className="text-black/90 text-sm font-bold" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}>
//                   ACHIEVEMENT
//                 </div>
//               </div>
//
//               <div className="text-center pt-4 border-t-2 border-yellow-800/40">
//                 <p
//                   className="text-black/80 text-xs font-semibold animate-pulse"
//                   style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
//                 >
//                   AWARDED ON{" "}
//                   {new Date()
//                     .toLocaleDateString("en-US", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })
//                     .toUpperCase()}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//
//         {/* Enhanced lightning sweep animation */}
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent transform -skew-x-12 translate-x-full animate-sweep"></div>
//       </Card>
//     </div>
//   )
// }
