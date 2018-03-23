class Item < ApplicationRecord
    before_create :default_values

    private
      def default_values
        self.done ||= false
      end 
end
