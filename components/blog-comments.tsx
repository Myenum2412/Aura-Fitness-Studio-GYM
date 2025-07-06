"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Send, Users } from "lucide-react"
import { useBlog } from "@/lib/blog-context"
import { formatDistanceToNow } from "date-fns"

interface BlogCommentsProps {
  postId: string
  className?: string
}

export default function BlogComments({ postId, className = "" }: BlogCommentsProps) {
  const [newComment, setNewComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { getPostById, addComment, likeComment } = useBlog()

  const post = getPostById(postId)
  const comments = post?.comments || []

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return

    setIsSubmitting(true)
    addComment(postId, newComment.trim())
    setNewComment("")

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000)
  }

  const handleLikeComment = (commentId: string) => {
    likeComment(commentId)
  }

  const formatTimeAgo = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true })
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Comments Header */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <MessageCircle className="h-5 w-5 text-highlight-yellow" />
            Comments ({comments.length})
            <Badge variant="outline" className="ml-auto">
              <Users className="h-3 w-3 mr-1" />
              Live Updates
            </Badge>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Add Comment Form */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <form onSubmit={handleSubmitComment} className="space-y-4">
            <div className="flex items-start gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-highlight-yellow text-black text-sm">You</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="border-2 border-gray-200 focus:border-highlight-yellow resize-none"
                  rows={3}
                />
                <div className="flex justify-between items-center mt-3">
                  <p className="text-xs text-subtext-gray">Comments are updated in real-time</p>
                  <Button
                    type="submit"
                    disabled={!newComment.trim() || isSubmitting}
                    className="bg-highlight-yellow hover:bg-accent-orange text-black"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        Posting...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Post Comment
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <MessageCircle className="h-12 w-12 text-subtext-gray mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-black mb-2">No comments yet</h3>
              <p className="text-subtext-gray">Be the first to share your thoughts on this post!</p>
            </CardContent>
          </Card>
        ) : (
          comments.map((comment, index) => (
            <Card
              key={comment.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={comment.userAvatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-highlight-yellow text-black">
                      {comment.userName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-black">{comment.userName}</h4>
                      <span className="text-xs text-subtext-gray">{formatTimeAgo(comment.createdAt)}</span>
                      {comment.userId === "current-user" && (
                        <Badge variant="secondary" className="text-xs">
                          You
                        </Badge>
                      )}
                    </div>
                    <p className="text-subtext-gray mb-3 leading-relaxed">{comment.content}</p>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLikeComment(comment.id)}
                        className="text-subtext-gray hover:text-accent-orange p-0 h-auto"
                      >
                        <Heart className="h-4 w-4 mr-1" />
                        {comment.likes > 0 && <span className="text-xs">{comment.likes}</span>}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-subtext-gray hover:text-highlight-yellow p-0 h-auto"
                      >
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs">Reply</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Live Update Indicator */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2 text-xs text-subtext-gray bg-background-light px-3 py-2 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Comments update automatically
        </div>
      </div>
    </div>
  )
}
