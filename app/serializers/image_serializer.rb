class ImageSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :caption, :tag
end
