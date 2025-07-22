import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, ArrowUpRight, Sparkles, Target, TrendingUp } from "lucide-react"

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
      {/* Subtle glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      <Card className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
        {/* Floating trophy icon */}
        <div className="absolute top-6 right-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
          <div className="relative p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg">
            <Trophy size={24} className="text-white" />
            <div className="absolute -top-1 -right-1">
              <Sparkles size={12} className="text-amber-300 animate-pulse" />
            </div>
          </div>
        </div>

        <CardContent className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-full border border-emerald-200/50 mb-4">
              <Target size={14} className="text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700 tracking-wide uppercase">Achievement</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 leading-tight mb-3 group-hover:text-blue-700 transition-colors duration-300">
              {title}
            </h3>

            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>

          {/* Impact section */}
          <div className="mb-6 p-5 bg-gradient-to-br from-blue-50/80 to-purple-50/80 rounded-2xl border border-blue-100/50">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={16} className="text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">Key Impact</span>
            </div>

            <ul className="space-y-2">
              {impact.split(",").map((impactItem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium leading-relaxed">{impactItem.trim()}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills badges */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge
                  key={badge}
                  className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border border-gray-200 hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-300 hover:scale-105 font-medium"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action button */}
          <div className="pt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 w-full justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 group/button"
            >
              <span>Explore Solution</span>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
              />
            </a>
          </div>
        </CardContent>

        {/* Subtle animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </Card>
    </div>
  )
}


