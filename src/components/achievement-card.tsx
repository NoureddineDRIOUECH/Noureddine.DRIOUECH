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

            <Card className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 rounded-2xl overflow-hidden transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600"></div>

                {/* Floating elements */}
                <div className="absolute top-6 right-6 text-yellow-400 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <div className="relative">
                        <Trophy size={28} className="drop-shadow-lg" />
                        <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
                    </div>
                </div>

                <CardContent className="p-8 relative z-10">
                    {/* Header section */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30 backdrop-blur-sm">
                                <Award size={14} className="text-yellow-400" />
                                <span className="text-xs font-semibold text-yellow-300 tracking-wide">TEAM CONTRIBUTION</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight mb-3">
                            {title}
                        </h3>

                        <p className="text-gray-300 leading-relaxed text-base">{description}</p>
                    </div>

                    {/* Impact section - the star of the show */}
                    <div className="mb-6 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl blur-sm"></div>
                        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-yellow-300 tracking-wide uppercase">Key Impact</span>
                            </div>
                            <p className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                {impact}
                            </p>
                        </div>
                    </div>

                    {/* Skills badges */}
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                            {badges.map((badge, index) => (
                                <Badge
                                    key={badge}
                                    className="bg-slate-700/50 hover:bg-slate-600/50 text-gray-200 border-slate-600/50 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
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
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105 group/link"
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