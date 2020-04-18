class Comment < ApplicationRecord
    
    validates :body, :video_id, :user_id, :author, presence: true


    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User


    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video

    
    belongs_to :parent,
        foreign_key: :parent_id,
        class_name: :Comment,
        optional: true

    
    has_many :comments,
        foreign_key: :parent_id,
        class_name: :Comment,
        dependent: :destroy


    has_many :likes, as: :likeable,
        dependent: :destroy


    def num_likes 
        likes = self.likes.select do |like| 
            like.liked == true
        end
        likes.length
    end


    ## touching up on the enumerbale methods, 
    ## both methods do the same thing in iteration


    def num_dislikes
        dislikes = self.likes.select { |like| like.liked == false }
        dislikes.length
    end

    
end
