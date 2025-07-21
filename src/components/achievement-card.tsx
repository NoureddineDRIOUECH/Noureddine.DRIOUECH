import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, ExternalLink, Sparkles, Award, ArrowUpRight } from "lucide-react"

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
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 rounded-2xl blur opacity-10 group-hover:opacity-30 transition-all duration-500"></div>

            <Card className="relative inset-0 bg-gradient-to-br from-[#0a0f2b] via-[#1a1f40] to-[#2a2f60] border border-slate-700 rounded-2xl overflow-hidden transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out"></div>
                
                {/* Floating elements */}
                <div className="absolute top-6 right-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-[15deg]">
                    <div className="relative">
                        <Trophy size={28} className="text-violet-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
                        <Sparkles size={12} className="absolute -top-1 -right-1 text-blue-300 animate-pulse" />
                    </div>
                </div>

                <CardContent className="p-6 relative z-10">
                    {/* Header section */}
                    <div className="mb-5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex items-center gap-2 px-3 py-1 bg-blue-900/40 backdrop-blur-sm rounded-full border border-blue-700/50">
                                <Award size={14} className="text-blue-300" />
                                <span className="text-xs font-medium text-blue-200 tracking-wider">TEAM CONTRIBUTION</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-white leading-tight mb-3 group-hover:text-blue-200 transition-colors">
                            {title}
                        </h3>

                        <p className="text-slate-300 leading-relaxed text-sm">{description}</p>
                    </div>

                    {/* Impact section */}
                    <div className="mb-5 relative p-4 bg-violet-900/30 backdrop-blur-sm rounded-xl border border-violet-700/50">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-xs font-semibold text-blue-300 tracking-wide uppercase">Key Achievement</span>
                        </div>
                        <ul className="space-y-1.5">
                            {impact.split(',').map((impactItem) => (
                                <li key={impactItem} className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    <span className="text-white font-medium">{impactItem}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skills badges */}
                    <div className="mb-5">
                        <div className="flex flex-wrap gap-2">
                            {badges.map((badge) => (
                                <Badge
                                    key={badge}
                                    className="bg-gradient-to-r from-blue-700/80 to-violet-700/80 text-white border border-blue-500/30 backdrop-blur-sm hover:from-blue-600/80 hover:to-violet-600/80 transition-all duration-200 hover:scale-[1.03]"
                                >
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Action link */}
                    <div className="pt-3">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-[0_5px_20px_-3px_rgba(99,102,241,0.5)] group/link"
                        >
                            <span>View Industry Solution</span>
                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            />
                        </a>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
