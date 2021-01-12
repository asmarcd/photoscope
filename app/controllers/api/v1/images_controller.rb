module api
    module v1
        class ImagesController < ApplicationController
            def index
                images = Image.all

                render json: ImageSerializer.new(images).serialized_json
            end

            # Not sure at the moment if this should be by tag or by id. You'll be able to pull all photos by tag, so that's what I'll need to search by
            def show
                image = Image.find_by(tag: params[:tag])
            end

            def create
                image = Image.new(image_params)

                if image.save
                    render json: ImageSerializer.new(image).serialized_json              
                else
                    render json: {error: image.errors.messages}, status: 422
                end    
            end

            def update
                image = Image.find_by(id: params[:id])

                if image.update(image_params)
                    render json: ImageSerializer.new(image).serialized_json              
                else
                    render json: {error: image.errors.messages}, status: 422
                end    
            end

            def destroy
                image = Image.find_by(id: params[:id])

                if image.destroy(image_params)
                    head :no_content             
                else
                    render json: {error: image.errors.messages}, status: 422
                end    
            end

            private

            def image_params
                params.require(:image).permit(:name, :image_url, :caption, :tag)
            end

        end
    end
end